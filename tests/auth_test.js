///<reference types='codeceptjs' />
const config = require('../framework/config/config.js');
const expect = require('chai').expect;

Feature('Авторизация');

Before(({LoginPage}) => {
    LoginPage.visit(config.urls.mainPage)
})



Scenario('Успешная  авторизация',async  ({ I,LoginPage }) => {
    await LoginPage.login(config.credentials.user)
    I.dontSeeCurrentUrlEquals(config.urls.loginPage)
    I.seeCurrentUrlEquals(config.urls.mainPage)
});

Scenario('Нельзя авторизоваться без пароля',async  ({ I,LoginPage }) => {
    await LoginPage.fillUsername(config.credentials.user.username)
    await LoginPage.submitForm()
    I.dontSeeCurrentUrlEquals(config.urls.mainPage)
    I.seeCurrentUrlEquals(config.urls.loginPage)
    I.see(config.loginPageErrors.passwordErr)
});

Scenario.skip('Успешная  авторизация',async  ({ I,LoginPage }) => {
    //pause()
    await LoginPage.login(config.credentials.user)
    //pause()
    I.dontSeeCurrentUrlEquals(config.urls.loginPage)
});