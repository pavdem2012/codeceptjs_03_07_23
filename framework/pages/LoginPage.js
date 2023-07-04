const {I} = inject();

module.exports = {
    fields: {
        user: {
            username: '#username',
            password: '#password'
        }
    },
    submitButton: locate('button').withText('Войти'),
    errors: '.help',


    visit(pageUrl) {
        I.amOnPage(pageUrl);
        I.see('Войти')
    },

    getLoginSession() {
        this.visit();
        this.login(this.fields.user);
    },

    fillUsername(username) {
        I.fillField(this.fields.user.username, username);
    },

    fillPassword(password) {
        I.fillField(this.fields.user.password, password);
    },

    submitForm() {
        I.click(this.submitButton);
    },

    async getPasswordError() {
        return await I.grabTextFrom(this.errors);
    },

    login({username, password}) {
        //this.visit()
        this.fillUsername(username);
        this.fillPassword(password);
        this.submitForm();
    },

};

