class LoginScreenPom {

    /*Element locators*/
    static LOGIN_SELECTOR = 'new UiSelector().className("android.widget.EditText").resourceIdMatches(".*:id/username")';
    static PASSWORD_SELECTOR = 'new UiSelector().className("android.widget.EditText").resourceIdMatches(".*:id/password")';
    static LOGIN_BTN_SELECTOR = 'new UiSelector().className("android.widget.Button").text("SIGN IN OR REGISTER")';

    /*Create new instance*/
    constructor(client) {
        this.client = client;
    }

    /*Enter name in the field*/
    async enterName(name) {
        const nameField = await this.client.$(`android=${LoginScreenPom.LOGIN_SELECTOR}`);
        await nameField.setValue(name);
    }

    /*Enter password in the respective field*/
    async enterPassword(password) {
        const nameField = await this.client.$(`android=${LoginScreenPom.PASSWORD_SELECTOR}`);
        await nameField.setValue(password);
    }

    /*Get contents of the user name field*/
    async getEnteredName() {
        const nameField = await this.client.$(`android=${LoginScreenPom.LOGIN_SELECTOR}`)
        return await nameField.getText();
    }
        

    /*Get contents of the password field. It is expected to be masking characters*/
    async getEnteredPassword() {
        const passwordField = await this.client.$(`android=${LoginScreenPom.PASSWORD_SELECTOR}`)
        return await passwordField.getText();
    }

    

    /*Click the button for login*/
    async clickLoginButton() {
        const button = await this.client.$(`android=${LoginScreenPom.LOGIN_BTN_SELECTOR}`);
        await button.click();
    }

    /*Determine if the login button is enabled*/
    async isLoginButtonEnabled() {
        const button = await this.client.$(`android=${LoginScreenPom.LOGIN_BTN_SELECTOR}`);
        return await button.isEnabled();
    }

}

/*Export the class*/
export { LoginScreenPom };