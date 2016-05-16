webCrawlerSearch.factory('SearchURL', ['$http', function($http) {
  return {
    query: function(siteToVisit) {
      return $http.jsonp("http://" + siteToVisit + "?JSON_CALLBACK");
    }
  };
}]);
