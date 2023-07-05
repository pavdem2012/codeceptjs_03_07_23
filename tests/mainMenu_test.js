const config = require('../framework/config/config.js');
const mainMenuElements = require ('../framework/elements/MainMenuElements.js')
Feature('Главное меню');

Before(({LoginPage}) => {
    LoginPage.visit(config.urls.mainPage)
    LoginPage.login(config.credentials.user)
})

Scenario('Проверка переходов по главному меню',  ({ I }) => {
    I.seeCurrentUrlEquals(config.urls.mainPage)
    mainMenuElements.setItemByName(config.mainMenuItems.reviewItem)
    I.seeInTitle(config.titlesPages.mainPageTitle)
    I.seeCurrentUrlEquals(config.urls.mainPage)
    mainMenuElements.setItemByName(config.mainMenuItems.upcomingChallengesItem)
    I.seeInTitle(config.titlesPages.upcomingChallengesTitle.subStr1)
    I.seeCurrentUrlEquals(config.urls.upcomingChallengesPage)
    mainMenuElements.setItemByName(config.mainMenuItems.projectsItem)
    I.seeInTitle(config.titlesPages.projectsPageTitle)
    I.seeCurrentUrlEquals(config.urls.projectsPage)
    mainMenuElements.setItemByName(config.mainMenuItems.labelsItem)
    I.seeInTitle(config.titlesPages.labelsPageTitle)
    I.seeCurrentUrlEquals(config.urls.labelsPage)
    mainMenuElements.setItemByName(config.mainMenuItems.teamsItem)
    I.seeInTitle(config.titlesPages.teamsPageTitle)
    I.seeCurrentUrlEquals(config.urls.teamsPage)
});
