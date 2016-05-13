describe('WebSearchController', function () {
  beforeEach(module('WebSearch'));

  var ctrl;

  beforeEach(inject (function($controller) {
  	ctrl = $controller('WebSearchController');
  }));

  describe('when searching within URL', function() {
    var urls = [
      "https://gocardles.com",
      "https://gocardless.com/features/",
      "https://gocardless.com/pricing/",
      "https://developer.gocardless.com/"
    ];


    it('displays search results', function() {
      expect(ctrl.searchResult.urls).toEqual(urls);
    });
  });
});