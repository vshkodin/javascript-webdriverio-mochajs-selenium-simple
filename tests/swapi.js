describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url('https://swapi.dev/');

	$('a[href="/about"]').click();
	$("a[href='/documentation']").click();
	browser.saveScreenshot('screenshot.png');
	//browser.click("a[href='/documentation']");
    });
});

