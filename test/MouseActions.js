const actions = require ('../pages/actions')

describe("mouse actions on spice jet", function(){

    // it ("move to element mouse over actions", function(){
    //     browser.url("https://book.spicejet.com/")
    //     actions.moveToElement(actions.LoginSignup);
    //     actions.moveToElement(actions.SpiceClubMem);
    //     actions.clickElement(actions.memLogin);
    //     browser.pause(3000)
    // })
    it ("key board actions TAB", function(){
        browser.url("https://the-internet.herokuapp.com/key_presses")
        actions.enterSearch('Tab');
        const text= actions.getElementText();
        console.log(text);
        assert.equal("You entered: TAB", text);
        browser.pause(3000)
    })



})