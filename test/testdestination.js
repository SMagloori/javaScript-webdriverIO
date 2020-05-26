const Homepage = require("../pages/page")
const dateformat = require("../utils/date")

var assert = require('assert')
describe("Test booking for a perticular date", function(){
 browser.url("https://www.caesars.com/");
 
 
 it ("enter destination Select visible txt", function(){
 Homepage.SelectDestination()
 Homepage.selectByViText("Caesars Palace");
 Homepage.selecttypeDates("Flexible dates")
 Homepage.selectMonth("July 2020")
 Homepage.booknowClick()
 //Homepage.selectByViFromTextDate(dateformat.Date());
 //dateformat.Dateabc(FDateTextab)
 //dateformat.Dateabc("65 days from today")

Homepage.selectTravelDates(65 , 70 )
 //Homepage.selectByViToTextDate("Fri Jul 24 2020");
 Homepage.SelectRoomClick();
 
 Homepage.matchPreference();
 browser.pause(15000)
 });
 
})