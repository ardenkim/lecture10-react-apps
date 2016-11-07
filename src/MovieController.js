//TMDB constants (https://developers.themoviedb.org/3/getting-started)
var apiKey = "d37398a8fa01ed9f121f9074b614e320";
var baseApiUrl = "https://api.themoviedb.org/3";
var baseImageUrl = "https://image.tmdb.org/t/p/w92"; //small posters

//an object representing the controller
//contains functions that can be called
var controller = {

  //download data from the url
  search: function(searchQuery) {    
    //construct URL
    var uri = baseUrl + resource + '?query='+searchQuery;

    fetch(uri) //download the data
      .then(function(res) { return res.json(); })
      .then(function(data) {
        //re-render with new data (pass in as a prop)
        ReactDOM.render(<App data={data} />, rootElem);
      });
  },

  //other functions can go here
};

export default controller; //export object