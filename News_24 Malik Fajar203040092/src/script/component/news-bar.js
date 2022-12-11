class newsBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          background-color: #ffc844;
          background-image: linear-gradient(225deg, #ffc844 0%, #9209ff 100%);       
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
          padding: 30px;
          text-align: center;
          
        }
      </style>
      
      <h2>News App24</h2>
    `;
  }
}

customElements.define('news-bar', newsBar);
