describe("Test Login form with credentials by passing Username", () => {

    beforeEach( async () => {
        await browser.url("/");
    })
    

    it("Should validate proper error 'Password is required'", async() => {
        //Finding input elements and setting values into it
       await $('//input[@id="user-name"]').setValue("a");
       await $('//input[@id="password"]').setValue("b");

       //Deleting value from password input
       
        await $('//input[@id="password"]').click();
        await browser.keys('Backspace');
        
        //checking if password input value is empty
        
       await expect($('//input[@id="password"]')).toHaveText('');

       //Hit the "Login" button

       await $('//input[@id="login-button"]').click();

        //Check the error messages: "Password is required".
       await expect($(`//div[contains(@class, 'error-message-container')]`)).toHaveText("Epic sadface: Password is required");
    


    });
})