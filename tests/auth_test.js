///<reference types='codeceptjs' />
const config = require('../framework/config/config.js');


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

Scenario('Нельзя авторизоваться без имени пользователя',async  ({ I,LoginPage }) => {
    await LoginPage.fillPassword(config.credentials.user.password)
    await LoginPage.submitForm()
    I.dontSeeCurrentUrlEquals(config.urls.mainPage)
    I.seeCurrentUrlEquals(config.urls.loginPage)
    I.see(config.loginPageErrors.usernameErr)
});