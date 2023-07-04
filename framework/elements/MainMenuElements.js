const {I} = inject();

const Elements = {
    menuList: '.menu-list',
    activeMenuItem: '.router-link-exact-active'
};

const MainMenuElements = {

    getRoot() {
        return locate(Elements.menuList);
    },

    setItemByName(name) {
        //const I = inject();
        I.click(locate(Elements.menuList).find('a').withText(name));
    },

    // getActiveItem() {
    //     return this.getRoot()
    //         .find(Elements.activeMenuItem)
    //         .then((element) => {
    //             const text = element.text().trim();
    //             return text;
    //         });
    // },


    getExpectedHeaderText(index) {
        const expectedTexts = [
            'Основное',
            'Навигация',
            'Канбан',
            'Просмотр проекта',
            'Страница задачи'
        ];
        return expectedTexts[index];
    }
};

module.exports = MainMenuElements;
