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
    //pause()


    //console.log('d;fkjbsD;KFJBK;JBkfBBZF:')
    //pause()

});