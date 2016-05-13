describe('WebCrawlerController', function () {
  beforeEach(module('WebSearch'));

  var ctrl;

  beforeEach(inject (function($controller) {
  	ctrl = $controller('WebSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
