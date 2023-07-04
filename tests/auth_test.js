///<reference types='codeceptjs' />
const config = require('../framework/config/config.js');
const expect = require('chai').expect;

Feature('Авторизация');

Before(({LoginPage}) => {
    LoginPage.visit(config.urls.mainPage)
})



Scenario('Успешная  авторизация',async  ({ I,LoginPage }) => {
    //pause()
    await LoginPage.login(config.credentials.user)
    //pause()
    I.dontSeeCurrentUrlEquals(config.urls.loginPage)
});
