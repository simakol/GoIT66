const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

function getNews(query) {
  return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then((res) =>
    res.json()
  );
}

export default { getNews };
