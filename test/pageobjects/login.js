import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import SauceBasePage from './basePage.js';
import Security from './security.js';
import { validUsers, locked_out_user, invalidPassword, invalidUsername} from './users.js';


class Login extends SauceBasePage {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }



    async validLogin (){
        for (let user of validUsers) {

            await this.inputUsername.setValue(user.username);
            console.log(`Testing with username: ${user.username}`);
            await this.inputPassword.setValue(user.password);
            await this.btnSubmit.click();
            await expect(Security.HomePage).toBeExisting;
            await this.hamburgerMenu.click();
            await this.logOut.click();
        } 
        };



    openBasePage () {
        return super.openBasePage('');
    }
}


export default new Login();
