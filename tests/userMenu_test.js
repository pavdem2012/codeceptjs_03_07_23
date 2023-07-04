///<reference types='codeceptjs' />
const config = require('../framework/config/config.js');
const userMenuElements = require ('../framework/elements/UserMenuElement.js')

Feature('Меню пользователя');
Before(({LoginPage}) => {
    LoginPage.visit(config.urls.mainPage)
    LoginPage.login(config.credentials.user)
})

Scenario('Переход к странице настроек и выбор локали',  ({ I }) => {
    I.seeCurrentUrlEquals(config.urls.mainPage)
    userMenuElements.clickItemByIndex(1)
    I.seeCurrentUrlEquals(config.urls.settingsPage)
    userMenuElements.setSettings('ru-RU')
    I.see(config.userMenuTitles.basicSettingsItem)

});

Scenario('Вывод модального окна "Сочетания клавиш"',  ({ I }) => {
    I.seeCurrentUrlEquals(config.urls.mainPage)
    userMenuElements.clickItemByText('Сочетания клавиш')
    I.seeCurrentUrlEquals(config.urls.mainPage)
    I.see(config.userMenuTitles.keyboardShortcutsItem.keyboardShortcutsItem)
    userMenuElements.closeSettings()
    I.seeCurrentUrlEquals(config.urls.mainPage)
});

Scenario('Вывод модального окна "О Vikunja"',  ({ I }) => {
    I.seeCurrentUrlEquals(config.urls.mainPage)
    userMenuElements.clickItemByText('О Vikunja')
    I.seeCurrentUrlEquals(config.urls.aboutPage)
    I.see(config.userMenuTitles.aboutItem.aboutItem)
    I.see(config.userMenuTitles.aboutItem.subTitles.frontendVersionTitle)
    I.see(config.userMenuTitles.aboutItem.subTitles.apiVersionTitle)
    userMenuElements.closeAbout()
    I.seeCurrentUrlEquals(config.urls.mainPage)
});

Scenario('Успешный разлогин',  ({ I }) => {
    I.seeCurrentUrlEquals(config.urls.mainPage)
    userMenuElements.clickItemByText('Выйти')
    I.seeCurrentUrlEquals(config.urls.loginPage)
});