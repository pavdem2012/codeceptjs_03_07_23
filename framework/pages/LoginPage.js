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

    fillUsername(username) {
        I.fillField(this.fields.user.username, username);
    },

    fillPassword(password) {
        I.fillField(this.fields.user.password, password);
    },

    submitForm() {
        I.click(this.submitButton);
    },

    login({username, password}) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.submitForm();
    },

};

