class newsItem extends HTMLElement {


  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set news(news) {
    this._news = news;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          color: white;
          box-sizing: border-box;
        }
        :host {
          display: inline-flex;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .news-info {
          padding: 24px;
        }
        .news-info > h2 {
          font-weight: lighter;
          padding :1em;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .news-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          
        }
      </style>
      
      <div class="news-info">
        <h2>${this._news.title}</h2>
        <h1>${this._news.author}</h1>
        <h3>${this._news.publishedAt}</h3>
        <p>${this._news.description}</p>
      </div>
    `;
  }
}

customElements.define('news-item', newsItem);
