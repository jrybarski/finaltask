import LoginForm from '../components/LoginForm.js';

class LoginPage {

    async clearInput(inputType) {
        if (inputType === 'username') {
            await LoginForm.clearInput(LoginForm.usernameInput);
        } else if (inputType === 'password') {
            await LoginForm.clearInput(LoginForm.passwordInput);
        }
    }
    
    async enterUsername(username) {
        await LoginForm.fillUsername(username);
    }

    async enterPassword(password) {
        await LoginForm.fillPassword(password);
    }

    async getErrorMessage() {
        return await LoginForm.getErrorMessage();
    }

    async submitLogin() {
        await LoginForm.clickLogin();
    }
}

export default new LoginPage();
