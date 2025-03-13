class LoginForm {

    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    get passwordInput() {
        return $('//input[@id="password"]');
    }

    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    get errorMessage() {
        return $(`//div[contains(@class, 'error-message-container')]`);
    }

    async fillInput(inputElement, value) {
        await inputElement.setValue(value);
    }

    async clearInput(inputElement) {
        await inputElement.click();
        await browser.keys('Backspace');
    }

    async fillUsername(username) {
        await this.fillInput(this.usernameInput, username);
    }

    async fillPassword(password) {
        await this.fillInput(this.passwordInput, password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

export default new LoginForm();

