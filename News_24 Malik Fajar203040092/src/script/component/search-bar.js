class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 900px;
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background: rgb(228,11,217);
          background: linear-gradient(90deg, rgba(228,11,217,1) 9%, rgba(0,100,236,1) 93%);
        }
        .search-container > input {
          width: 65%;
          padding: 17px;
          border: 0;
          border-radius: 11px;
          border-bottom: 1px solid black;
          font-weight: bold;
        }
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid black;
        }
        .search-container > input:focus::placeholder {
          font-weight: bold;
          
        }
        .search-container >  input::placeholder {
          color: black;
          line-height: 1.6;
          font-weight: normal;
        }
        .search-container > button {
          width: 33%;
          cursor: pointer;
          border-radius: 15px;
          margin-left: auto;
          padding:24px;
          background-color: #183af9;
          background-image: linear-gradient(160deg, #183af9 18%, #fb2a0a 100%);
          color: white;
          border: 0;
          text-transform: uppercase;
        }
        @media screen and (max-width: 750px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
         
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="News Search" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
