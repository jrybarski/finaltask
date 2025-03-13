import LoggedIn from '../components/LoggedIn.js';


class MainPage {

    get loggedIn() {
        return LoggedIn;
    }

    async isPageDisplayed() {
        return await this.loggedIn.logo.isDisplayed();
    }
}

export default new MainPage();
