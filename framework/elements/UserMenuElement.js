const { I } = inject();

module.exports = {
    elements:{
        userNameMenu: '.username',
        dropDownContent:'.dropdown-content',
        modalWinBody:'body',
        closeBtn: 'button[data-v-896d50a9][class="base-button base-button--type-button button is-outlined"]',
        langDropMenu: ':nth-child(9) > .is-flex > .select > select',
        submitSettingsBtn: 'button.base-button.is-primary',
        modalWinTitle:'.card-header-title',
        headerH3:'div.content > h3[data-v-e103502e=""]',
        headerH4: '.p-4'
    },
    getRoot(){
        return locate(this.elements.dropDownContent)
    },
    clickItemByIndex(index) {
        this.getUserMenu();
        I.grabTextFrom("span[data-v-23ee639f]").then(text => {
            index = text;
        });
        const itemSelector = locate(this.elements.dropDownContent).find('span').at(index);
        I.seeElement(itemSelector);
        I.click(itemSelector);
    },

    clickItemByText(text) {
        this.getUserMenu();
        const itemSelector = locate(this.elements.dropDownContent).find('span').withText(text);
        I.seeElement(itemSelector);
        I.click(itemSelector);
    },
    getUserMenu(){
        I.click(this.elements.userNameMenu)


    },
    closeSettings(){
        I.pressKey('Escape')
    },

    closeAbout(){
        I.click(this.elements.closeBtn)
    },
    setSettings(value){
        I.selectOption(this.elements.langDropMenu,value)
        I.click(this.elements.submitSettingsBtn)
    }
}



// const Elements={
//     userNameMenu: '.username',
//     dropDownContent:'.dropdown-content',
//     modalWinBody:'body',
//     closeBtn: 'footer.card-footer button.base-button',
//     langDropMenu: ':nth-child(10) > .is-flex > .select > select',
//     submitSettingsBtn: '[data-cy="saveGeneralSettings"]',
//     modalWinTitle:'.card-header-title',
//     headerH3:'div.content > h3[data-v-e103502e=""]',
//     headerH4: '.p-4'
// }
// const UserMenuElement ={
//     Elements: Elements,
//
//     getRoot(){
//         return cy.get(Elements.dropDownContent)
//     },
//     clickItemByIndex(index){
//         this.getUserMenu()
//         this.getRoot().should('be.visible').find('span').eq(index).click()
//     },
//     clickItemByText(text){
//         this.getUserMenu()
//         this.getRoot().should('be.visible').find('span').contains(text).click()
//     },
//     getUserMenu(){
//         cy.get(Elements.userNameMenu).click({force:true})
//     },
//     closeSettings(){
//         cy.get(Elements.modalWinBody).type('{esc}')
//     },
//
//     closeAbout(){
//         cy.get(Elements.closeBtn).contains('Закрыть').click();
//     },
//     setSettings(value){
//         cy.get(Elements.langDropMenu).select(value)
//         cy.get(Elements.submitSettingsBtn).click()
//     }
// }
// export default UserMenuElement
//
//
