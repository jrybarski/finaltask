import loginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";
import MainPage from "../../pages/MainPage.js";

describe("Test Login form with credentials by passing Username & Password", () => {

    beforeEach( async () => {
        await browser.url("/");
    })
    

    it("Should validate the title 'Swag Labs' in the dashboard.", async() => {
        const { username, password, expectedError, expectedTitle } = DataProvider.loginData['UC-3'];
        //Finding input elements and setting values into it
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);

       //Hit the "Login" button

       await loginPage.submitLogin();

       expect(await MainPage.isPageDisplayed()).toBe(true);

       // And the header title should display "Swag Labs"
       const loggedInTitle = await MainPage.loggedIn.getLogoText();
       expect(loggedInTitle).toBe(expectedTitle);


    });
})