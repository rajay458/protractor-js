var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    specs : ['spec*.js'],
    jasmineNodeOpts:{
        showColors : true,
        silent : true,
        defaultTimeoutInterval: 36000,
        print: function(){}
    },

     capabilities : {
       'browserName': 'chrome',
       'shardTestFiles': true,
       'maxInstances': 2
     },
    // multiCapabilities: [
    //        {
    //          'browserName': 'chrome',
    //           'chromeOptions': {
    //          'args': ['disable-infobars']
    //          }
    //         },
    //           {'browserName': 'firefox',
    //           'moz:firefoxOptions': {
    //           'args': ['--safe-mode']
    //         }
    //           }
            
    //         ],
    
    onPrepare:()=>{
        var os = require('os');
        
		jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: false,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
          }));
        browser.manage().timeouts().implicitlyWait(4000);    
    }

}