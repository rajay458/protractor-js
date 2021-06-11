describe('switching betwwen the windows', function(){
    it('swithing between the windows',function(){
        browser.get('https://angularjs.org/');
        element(by.css('body > div:nth-child(2) > div.stage-container > div > div:nth-child(2) > a')).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (winHandle) {
            browser.switchTo().window(winHandle[1]);
        });
        element(by.css('#intro > div.homepage-container > div')).getText().then(function(txt){
           // console.log(txt);
            expect(txt).toEqual('One framework.\nMobile & desktop.');
        });
        browser.getAllWindowHandles().then(function (winHandle) {
            browser.switchTo().window(winHandle[0]);
        });
        $('body > div:nth-child(2) > div.stage-container > div > h2').getText().then(function(test){
            expect(test).toBe('AngularJS');
        })
        


     })
})