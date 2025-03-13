const DataProvider = {
    urls: {
        loginPage: 'https://www.saucedemo.com/',
        MainPage: 'https://www.saucedemo.com/inventory.html',
    },
    loginData: {
        'UC-1': {
            username: 'jakubrybarski',
            password: '123',
            expectedError: 'Epic sadface: Username is required'
        },
        'UC-2': {
            username: 'standard_user',
            password: '321',
            expectedError: 'Epic sadface: Password is required'
        },
        'UC-3': {
            username: 'standard_user',
            password: 'secret_sauce',
            expectedError: ''
        }
    }
};

export default DataProvider;
