describe('open the browser',function(){
    it('validate the header in tutoral link',function(){
         browser.get('https://angularjs.org/');
         element(by.css('#navbar-main > div > div > ul > li:nth-child(1) > a')).click();
         element(by.linkText('Tutorial')).click();
         element(by.id('phonecat-tutorial-app')).getText().then(function(text){
             expect(text).toEqual('PhoneCat Tutorial App')
         })
     });
    
    })