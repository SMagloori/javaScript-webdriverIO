describe ("drag and drop actions", function(){
    it ("drag and drop", function(){
        browser.url("https://jqueryui.com/droppable/")
        const element = $('//div[@id="draggable"]');
        const targetElement = $('//div[@id="droppable"]');
        //element.waitForDisplayed();
        //targetElement.waitForDisplayed()
        element.dragAndDrop(targetElement);

        browser.pause(3000)





    })




})