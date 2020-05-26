const homePage = require("../pages/example") 

describe("Booking a room for one specfic night ", function(){
    browser.url("https://www.caesars.com/");

    // it ("check the page", function(){
    //     expect(browser.getUrl()).equals("https://www.caesars.com/");
    //     homePage.selectDropdown();
       
    // })   
    // it ("enter destination ", function(){
    //     browser.url("https://www.caesars.com/")
    //     homePage.selectDropdown();
    //     homePage.selectdestination();
    //     //homePage.useCaseElements();
    //     homePage.selectspecfic();
    //     homePage.selectfromDate();
    //     let destnation = homePage.initialDestination
    //     console.log(destnation)
    //     homePage.selectToDate();
    //     homePage.clickBook()
    //     browser.pause(3000)
    //     assert.notEqual(browser.getUrl(),"https://www.caesars.com")
    //     assert.notEqual(homePage.fromDate, "8")
    //     assert.notEqual(homePage.toDate,"9")
    //     assert.equal(destnation,homePage.finalDestination)
    // })   
    it ("book for flexiable dates ", function(){
        browser.url("https://www.caesars.com/")
        browser.pause(3000)
        homePage.selectDropdown();
        homePage.selectdestination();
        //homePage.useCaseElements();
        homePage.selectFlexiable();
        homePage.selectfromDate();
        let destnation = homePage.initialDestination
        console.log(destnation)
        homePage.selectToDate();
        homePage.clickBook()
        browser.pause(3000)
        assert.notEqual(browser.getUrl(),"https://www.caesars.com")
        assert.notEqual(homePage.fromDate, "8")
        assert.notEqual(homePage.toDate,"9")
        assert.equal(destnation,homePage.finalDestination)
    })   




});