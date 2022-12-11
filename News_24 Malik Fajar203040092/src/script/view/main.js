import '../component/news-list.js';
import '../component/news-bar.js'
import '../component/footer-news.js'
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const newsListElement = document.querySelector('news-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchNews(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    newsListElement.news = results;
  };

  const fallbackResult = message => {
    newsListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
