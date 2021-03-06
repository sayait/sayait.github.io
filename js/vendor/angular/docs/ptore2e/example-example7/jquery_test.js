describe("module:ng.directive:ngDisabled", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("./examples/example-example7/index-jquery.html");
  });
  
  it('should toggle button', function() {
    expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
    element(by.model('checked')).click();
    expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
  });
});
