describe('reading the data', function(){
    it('By.repeter example', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables');
        browser.sleep(5000);
        var rows=element.all(by.repeater('dataRow in displayedCollection'))
            rows.each(function(row)  {
                    var cells = row.$$('td');
                    cells.get(0).getText().then(function(txt){
                      if (txt == 'sale'){
                          browser.sleep(5000);
                          cells.get(10).$('button').click();
                          browser.sleep(5000);
                          element(by.buttonText('OK')).click();
                          browser.sleep(5000);
                      }
                    
                    });
                });
            });
            it('validate the header in tutoral link',function(){
                browser.get('https://angularjs.org/');
                element(by.css('#navbar-main > div > div > ul > li:nth-child(1) > a')).click();
                element(by.linkText('Tutorial')).click();
                element(by.id('phonecat-tutorial-app')).getText().then(function(text){
                    expect(text).toEqual('PhoneCat Tutorial App')
                })
            });
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
                
        
        
             });
});