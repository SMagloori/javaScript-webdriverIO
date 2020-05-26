const internetPage = require("../pages/herokuapp") 

describe("handling checkboxes", function(){

    it ("check page url", function(){
        browser.url('https://the-internet.herokuapp.com');
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/')
    })

  

    it ("should click checkbox", function(){
        browser.url('https://the-internet.herokuapp.com');
        internetPage.clickOnLink(6);
        //internetPage.getHeader.waitForDisplayed();
        internetPage.clickOnCheckBox(1)
        expect(internetPage.getCheckBox(1)).isSelected().equals(true);
        browser.pause(5000);

    })

    it ("check box page header", function (){
        browser.url('https://the-internet.herokuapp.com');
        internetPage.clickOnLink(6);
       const text = internetPage.Header.getText();
       expect(text).equals("Checkboxes");
    })


 })