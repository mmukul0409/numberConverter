describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://127.0.0.1:51084/app/index.html');

    expect(browser.getTitle()).toEqual('Testing Angular');
  });
});