import { $ } from '@wdio/globals'


class LandingPage
{ 
    get radioButton()
    {
        return $('//ion-checkbox[@checked="false"]')
    }

    get proceedButton()
    {
        return $('//ion-button')
    }

   async NavigateToTableSelection()
    {
       await this.radioButton.click()
       await this.radioButton.click()
       await this.proceedButton.click()

    }

}

export default new LandingPage();