const { I } = inject();

module.exports = {
    fields: {
        username:'#username',
        password:'#password'
    },
    submitButton: locate('button').withText('Войти'),
    errors: {
        password: '.password-field +p'
    },


    visit(pageUrl) {
        I.amOnPage(pageUrl);
        I.see('Войти')
    },

    getLoginSession() {
        this.visit();
        this.login(config.credentials.user);
    },

    fillUsername(username) {
        I.fillField(this.fields.username, username);
    },

    fillPassword(password) {
        I.fillField(this.fields.password, password);
    },

    submitForm() {
        I.click(this.submitButton);
    },

    getPasswordError() {
        const errorText = I.grabTextFrom(Elements.errorText);
        return errorText;
    },

    login({ username, password }) {
        //this.visit()
        this.fillUsername(username);
        this.fillPassword(password);
        this.submitForm();
    },

};

