

class DataSource {
  static searchNews(keyword) {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=5cc5f3fcb8dd4a58a631a80628882612`)

        .then(response => {
         
          return response.json();
          

        })
        .then(responseJson => {
       
        
          if (responseJson.articles) {
            console.log(responseJson)
            return Promise.resolve(responseJson.articles);
          } else {
            return Promise.reject(`${keyword} News Not Found`);
          }
        });
  }
}

export default DataSource;
