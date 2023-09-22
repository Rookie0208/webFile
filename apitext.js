const url = 'https://sa-translate.p.rapidapi.com/translate/text';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '5e5cd86f6bmsh8f35caa9d4e8adfp1167a9jsn146cb7ebe412',
		'X-RapidAPI-Host': 'sa-translate.p.rapidapi.com'
	},
	body: {
		text: 'Here is some text that I want to translate from English to Portuguese',
		targetLanguage: 'pt'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}