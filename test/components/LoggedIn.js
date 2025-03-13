class LoggedIn {

    get logo() {
        return $(`//div[contains(@class, 'app_logo')]`);
    }

    async getLogoText() {
        return await this.logo.getText();
    }
}

export default new LoggedIn();
