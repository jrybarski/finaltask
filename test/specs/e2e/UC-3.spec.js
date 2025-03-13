describe("Test Login form with credentials by passing Username & Password", () => {

    beforeEach( async () => {
        await browser.url("/");
    })
    

    it("Should validate proper page title after successfully login in ", async() => {
        //Finding input elements and setting values into it
       await $('//input[@id="user-name"]').setValue("standard_user");
       await $('//input[@id="password"]').setValue("secret_sauce");

       //Hit the "Login" button

       await $('//input[@id="login-button"]').click();

        //Check the page title: 'Swag Labs'.

        await expect(browser).toHaveTitle('Swag Labs')

        // await expect($(`//div[contains(@class, 'app_logo')]`)).toHaveTitle
        
    


    });
})