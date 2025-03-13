describe("Test Login form with empty credentials", () => {

    beforeEach( async () => {
        await browser.url("/");
    })
    

    it("Type any credentials into 'Username' and 'Password' fields.", async() => {
        //Finding input elements and setting values into it
       await $('//input[@id="user-name"]').setValue("a");
       await $('//input[@id="password"]').setValue("b")

       //Deleting values from inputs
       
        await $('//input[@id="user-name"]').click();
        await browser.keys('Backspace');
        await $('//input[@id="password"]').click();
        await browser.keys('Backspace');
        
        //checking if inputs value are empty
        
       await expect($('//input[@id="user-name"]')).toHaveText('');
       await expect($('//input[@id="password"]')).toHaveText('');

       //Hit the "Login" button

       await $('//input[@id="login-button"]').click();

        //Check the error messages: "Username is required".
       await expect($(`//div[contains(@class, 'error-message-container')]`)).toHaveText("Epic sadface: Username is required");
    


    });
})