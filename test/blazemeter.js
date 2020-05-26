const balzePage = require('../pages/blaze')

describe("blazemeter elements handling", function(){

    it ("get all main text links", function(){
        
        browser.url('https://www.blazemeter.com')
        balzePage.getTextForLi
        balzePage.useCaseElements
        console.log(balzePage.specficElement(3).getText())
        balzePage.getspecficElementList(4)

    });

    it ("element is displayed", function(){
        
        browser.url('https://www.blazemeter.com')
        console.log(balzePage.mainHeader.isDisplayed())

    });

    it ("element is enabled", function(){
        
        browser.url('https://www.blazemeter.com')
        console.log(balzePage.mainHeader.isEnabled())
    });  
       
        it ("element is exixsts", function(){
        
            browser.url('https://www.blazemeter.com')
            console.log(balzePage.mainHeader.isExisting())
    });

    it ("element is isDisplayedInViewport", function(){
        
        browser.url('https://www.blazemeter.com')
        console.log(balzePage.mainHeader.isDisplayedInViewport())
    });
       
    it ("click on product link", function(){
        
        browser.url('https://www.blazemeter.com')
        balzePage.clickonProductLink();
        browser.pause(5000)
    });
        
});