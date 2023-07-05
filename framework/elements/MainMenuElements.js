const {I} = inject();

const Elements = {
    menuList: '.menu-list',
    activeMenuItem: '.router-link-exact-active'
};

const MainMenuElements = {

    setItemByName(name) {
        I.click(locate(Elements.menuList).find('a').withText(name));
    },

};

module.exports = MainMenuElements;
