class footerBar extends HTMLElement {

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
               
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h3 {
            background: rgb(28,244,143);
            background: linear-gradient(90deg, rgba(28,244,143,1) 10%, rgba(255,106,0,1) 94%);
            padding: 30px;
            text-align: center;
            color:white;
          }
        </style>
        
        <h3>News App24@.com</h3>
      `;
    }
  }
  
  customElements.define('footer-news', footerBar);
  