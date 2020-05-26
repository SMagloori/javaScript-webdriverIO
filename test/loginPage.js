const loginPage = require("../pages/loginheroku");

describe("handle application login", function(){

it ("enter username", function(){
    browser.url('https://the-internet.herokuapp.com/login');
    loginPage.enterUsername('tomsmith')
    assert.equal('tomsmith',loginPage.userName.getValue())
});
it ("enter password", function(){
    loginPage.enterpassWord('SuperSecretPassword');
    assert.equal('SuperSecretPassword',loginPage.passWord.getValue())
});
it ("click on login", function(){
    loginPage.clickonLogin()
});
it("should clear the values", function(){
    loginPage.userName.click();
    loginPage.userName.clearValue();
    assert.equal('',loginPage.userName.getValue())
})




})