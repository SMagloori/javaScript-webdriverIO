const homePage = require("../pages/cesarsHome") 

describe("Booking a room from", function(){
        browser.url("https://www.caesars.com/")
      //browser.url("https://www.caesars.com/");
      
        
 
 
 it("Header Text", function(){        
    expect(browser.getUrl()).to.deep.equal("https://www.caesars.com/")    
    homePage.listText;
        
        })

        it("main heading displayed", function(){
            console.log( homePage.textAmesstoOurcust.isDisplayed());
        })

        it("main heading enabled", function(){
            console.log( homePage.textAmesstoOurcust.isEnabled());
        })

        it("main heading exists", function(){
             console.log( homePage.textAmesstoOurcust.isExisting());
        })

        it("click on Reservation ", function(){
               homePage.clickonMyreservation();
               browser.pause(5000)
        })


        it("Room Booked perfectly", function(){
        browser.url("https://www.caesars.com/")
        homePage.destdd.click();
        browser.pause(5000);
        homePage.seldest.click();
        browser.pause(5000);
        homePage.fromDate.click();
        browser.pause(5000);
        homePage.toDate.click();
        browser.pause(5000);
        homePage.booknows.click();
        browser.pause(5000);
        
        })
    
       
});

