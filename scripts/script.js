import API from "./api.js";

const form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputValue = form.elements.news.value;

  API.getNews(inputValue)
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error("No data");

      return articles.reduce(
        (markup, article) => createMarkup(article) + markup,
        ""
      );
    })
    // .then((markup) => updateNewsList(markup));
    .then(updateNewsList)
    .catch(onError)
    .finally(() => form.reset());
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
    <div class="article-card">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || "Anonym"}</h3>
        <img src=${urlToImage} class="article-img">
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>
    
    `;
}

function updateNewsList(markup) {
  document.getElementById("articlesWrapper").innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateNewsList("<p>Articles not found</p>");
}
