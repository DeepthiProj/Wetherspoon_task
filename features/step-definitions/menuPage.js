import { expect, $, browser } from "@wdio/globals"

import { Given, When, Then } from "@wdio/cucumber-framework"
import landingPage from "../pageobjects/landingPage"
import chooseTable from "../pageobjects/chooseTable"
import menuPage from "../pageobjects/menu.page"
//import { remote } from "webdriverio"


 
   Given(/^I am on the landing page$/, async ()=>{
    await browser.url("https://order.jdwetherspoon.com/venue/pubs/95/tables")

    //await browser.setTimeout({ 'pageLoad': 120000 }); 


   }) 

  When(/^I select the Terms & Conditions and Privacy Policy radio buttons$/, async ()=> {
     await landingPage.radioButton.click()
     await landingPage.radioButton.click()

  });

 Then(/^I see the Continue button is enabled$/, async ()=> {
    await landingPage.proceedButton.isEnabled()
  });


  When(/^I click on the button$/,  async ()=> {
    await landingPage.proceedButton.click()
  });
  
Then(/^I will be navigated to the table selection page$/, async () => {
  await chooseTable.AssertPage('Choose table')
});


When(/^I clcik on the Browse the menu button$/, async () => {
  await expect(chooseTable.browseMenuButton).toBeClickable()
  await chooseTable.browseMenuButton.click()
});

Then(/^I should be redirected to the menu page$/, async () => {
  await expect(browser).toHaveUrl(expect.stringContaining('menu'))
  await expect(menuPage.menuFullList).toBePresent()
  await expect(menuPage.bottomMenu).toBePresent()

});

When(/^I click on back$/, async () => {
  await browser.back()
});


Given(/^I enter invalid data in the (.*) field$/i, async (tablenumber) => {
  await browser.refresh()
  await chooseTable.tableNumberField.setValue(tablenumber)
});

Then(/^I see relavant error (.*)$/i, async(message) => {
  await expect(chooseTable.errorText).toHaveText(expect.stringContaining(message))
});


Given(/^I enter the table number$/, async () => {
  await browser.refresh()
  await chooseTable.tableNumberField.setValue(35)
});

Then(/^'Continue' button will be enabled$/, async() => {
  await expect(chooseTable.continueButton).toBeClickable()
});

When(/^I click the 'Continue' button$/, async () => {
  await chooseTable.continueButton.click()
});


Given(/^I enter the search item$/, async () => {
  await menuPage.menuSearchField.setValue('sweet')
});

Then(/^Matching item list will be shown$/, async() => {
  const price = await $('.menu-item-price')
  await price.waitForExist({ timeout: 3000 })
 // await menuPage.price.waitForExist({ timeout: 3000 })
  await expect(menuPage.itemList).toBeDisplayed()
});





