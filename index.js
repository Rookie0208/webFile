// Import and set up the Google Translate API client library.
const { Translate } = require('@google-cloud/translate').v2;
const projectId = 'YOUR_PROJECT_ID'; // Replace with your own project ID

const translate = new Translate({ projectId });

// List of supported languages (codes and names).
const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Hindi' },
  // Add more languages as needed...
];

async function translateText(text, targetLanguage) {
  try {
    // Detect the source language automatically.
    const [detection] = await translate.detect(text);
    const sourceLanguage = detection.language;

    // Translate the text to the target language.
    const [translation] = await translate.translate(text, targetLanguage);

    return { sourceLanguage, translation };
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}

console.log('Supported languages:');
supportedLanguages.forEach((lang) => {
  console.log(`${lang.code}: ${lang.name}`);
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the text to translate: ', (sourceText) => {
  rl.question('Enter the target language code (e.g., "es" for Spanish): ', async (targetLanguage) => {
    const result = await translateText(sourceText, targetLanguage);
    if (result.error) {
      console.error('Translation error:', result.error);
    } else {
      console.log(`Source Language: ${result.sourceLanguage}`);
      console.log(`Translation: ${result.translation}`);
    }
    rl.close();
  });
});
