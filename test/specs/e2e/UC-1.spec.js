import loginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

describe("Test Login form with empty credentials", () => {

    beforeEach( async () => {
        await browser.url("/");
    })
    

    it("Should validate proper error 'Username is required'", async() => {
        const { username, password, expectedError } = DataProvider.loginData['UC-1'];
        //Finding input elements and setting values into it
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);


       //Deleting values from inputs
       for(let i=0; i < username.length; i++) {
        await loginPage.clearInput('username');
       };

       for(let i=0; i < password.length; i++) {
        await loginPage.clearInput('password');
       };

       //Hit the "Login" button

       await loginPage.submitLogin();

        //Check the error messages: "Username is required".
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);

    });
})