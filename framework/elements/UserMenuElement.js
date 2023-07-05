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

