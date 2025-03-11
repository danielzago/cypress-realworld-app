class registerPage{
    SelectorList(){
        const Selectors = {
        userFirstName: '#firstName',
        userLastName: '#lastName',
        userName: '#username',
        passwordField: '#password', 
        passwordConfirm: '#confirmPassword',  
        subimitbutton: '[data-test="signup-submit"]',  
        usernameField: '#username',
        passwordField: '#password',
        loginButton: '[data-test="signin-submit"]',
        bankacconuntName: '#bankaccount-bankName-input',
        bankacconuntRouting: '#bankaccount-routingNumber-input',
        bankaccountNumber: '#bankaccount-accountNumber-input',
        bankaccountSubmit: '[data-test="bankaccount-submit"]',
        nextGeneric: '[data-test="user-onboarding-next"]',


        }
        return Selectors
    }

    
    acessRegisterPage(){
        cy.visit( 'http://localhost:3000/signup')
    }

    loginwithAnyUser(username, password){
        cy.get(this.SelectorList().usernameField).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().loginButton).click()
    }

    checkAcessInvalid(){    
        cy.get(this.SelectorList().userError).should('be.visible')
    }

    registerNewUser(name, lastName, username, password){
        cy.get(this.SelectorList().userFirstName).type(name)
        cy.get(this.SelectorList().userLastName).type(lastName)
        cy.get(this.SelectorList().userName).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().passwordConfirm).type(password)
        cy.get(this.SelectorList().subimitbutton).click()
    }

    registerNewUserBlanck(name, username, password){
        cy.get(this.SelectorList().userFirstName).type(name)
        cy.get(this.SelectorList().userName).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().passwordConfirm).type(password)
        cy.get(this.SelectorList().subimitbutton).click()
    }

    registerInseideUser(bankName, numberccount, routingNumber){
        cy.get(this.SelectorList().nextGeneric).click()
        cy.get(this.SelectorList().bankacconuntName).type(bankName)
        cy.get(this.SelectorList().bankacconuntRouting).type(routingNumber)
        cy.get(this.SelectorList().bankaccountNumber).type(numberccount)
        cy.get(this.SelectorList().bankaccountSubmit).click()
        cy.get(this.SelectorList().nextGeneric).click()
    }
}


export default registerPage