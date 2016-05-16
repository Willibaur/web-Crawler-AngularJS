webCrawlerSearch.controller('WebSearchController',
    ['SearchURL', function(SearchURL) {

  var self = this;
  self.searchTerm = undefined;
  self.state =  undefined;

  self.doSearch = function() {
    SearchURL.query(self.searchTerm)
      .success(function(response) {
        self.state = response.status;
        console.log(self.state);
      });
    // self.searchResult = response.data;
  };
}]);
