describe('WebCrawlerController', function () {
  beforeEach(module('WebCrawler'));

  var ctrl;

  beforeEach(inject (function($controller) {
  	ctrl = $controller('WebCrawler');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
