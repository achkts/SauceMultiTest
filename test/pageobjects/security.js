import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import SauceBasePage from './basePage.js';


class Security extends SauceBasePage {

    
    get HomePage () {
        return browser.url(`https://www.saucedemo.com/inventory.html`);
    }
}

export default new Security();

