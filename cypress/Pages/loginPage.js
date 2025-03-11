class LoginPage{
    SelectorList(){
        const Selectors = {
        usernameField: '#username',  
        passwordField: '#password',   
        loginButton: '[data-test="signin-submit"]',  
        userError: '[data-test="signin-error"]', 
        messageError:  '.MuiAlert-message',
        passWordRequiered: '.oxd-input-group > .oxd-text',
        userNameRequiered: '#username-helper-text',
        confirmationLogin: '[data-test="main"]',
        }
        return Selectors
    }
    
    acessLoginPage(){
        cy.visit( 'http://localhost:3000/')
    }

    loginwithAnyUser(username, password){
        cy.get(this.SelectorList().usernameField).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().loginButton).click()
    }

    checkAcessInvalid(){    
        cy.get(this.SelectorList().userError).should('be.visible')
    }

    validLogin(){
        cy.get(this.SelectorList().confirmationLogin).should('be.visible')
    }
}

export default LoginPage