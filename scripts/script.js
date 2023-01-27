import LoadMoreBtn from "./components/LoadMoreBtn.js";
import NewsApi from "./NewsApi.js";

const form = document.getElementById("form");
const loadMoreBtn = new LoadMoreBtn({
  selector: "#loadMoreBtn",
  isHidden: true,
});

const newsApi = new NewsApi();

form.addEventListener("submit", onSubmit);
loadMoreBtn.button.addEventListener("click", fetchNews);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newsApi.searchQuery = form.elements.news.value.trim();
  clearNewsList();
  newsApi.resetPage();
  loadMoreBtn.show();

  fetchNews().finally(() => form.reset());
}

function fetchNews() {
  loadMoreBtn.disable();
  return newsApi
    .getNews()
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error("No data");

      return articles.reduce(
        (markup, article) => createMarkup(article) + markup,
        ""
      );
    })
    .then((markup) => {
      updateNewsList(markup);
      loadMoreBtn.enable();
    })
    .catch(onError);
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
    <div class="article-card">
         <img src=${urlToImage} class="article-img">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || "Anonym"}</h3>
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>
    
    `;
}

function clearNewsList() {
  document.getElementById("articlesWrapper").innerHTML = "";
}

function updateNewsList(markup) {
  document
    .getElementById("articlesWrapper")
    .insertAdjacentHTML("beforeend", markup);
}

function onError(err) {
  console.error(err);
  updateNewsList("<p>Articles not found</p>");
}
