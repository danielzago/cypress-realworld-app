/*class TransactionPage {
    selectorList() {
        const selectors = {
            buttonMine: '[href="/personal"]',
            newTransaction: '[data-test="nav-top-new-transaction"]',
            userSearchInput: '[data-test="user-list-search-input"]',
            avatarImage: '.MuiAvatar-img',
            transactionAmount: '#amount',
            transactionDescription: '#transaction-create-description-input',
            submitButton: '[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)',
            successMessage: '.MuiPaper-root > :nth-child(2) > .MuiGrid-container',
            successAlert: '[data-test="alert-bar-success"]',
            returnToTransactions: '[data-test="new-transaction-return-to-transactions"]',
            personalTab: '[data-test="nav-personal-tab"]'
        };
        return selectors;
    }

    navigateToPersonal() {
        cy.get(this.selectorList().buttonMine).click();
    }

    startNewTransaction() {
        cy.get(this.selectorList().newTransaction).click();
    }

    searchUser(name) {
        cy.get(this.selectorList().userSearchInput).type(name);
    }

    selectFirstUser() {
        cy.get(this.selectorList().avatarImage).first().click();
    }

    enterAmount(amount) {
        cy.get(this.selectorList().transactionAmount).type(amount);
    }

    enterDescription(description) {
        cy.get(this.selectorList().transactionDescription).type(description);
    }

    submitTransaction() {
        cy.get(this.selectorList().submitButton).click();
    }

    sendMoney(name, amount, description) {
        this.navigateToPersonal();
        this.startNewTransaction();
        this.searchUser(name);
        this.selectFirstUser();
        this.enterAmount(amount);
        this.enterDescription(description);
        this.submitTransaction();
    }
}


    verifySuccessMessage(amount) {
        cy.get(this.selectorList().successMessage)
            .should('have.text', `Paid $${amount}.00 for ${description}`);
    }

    verifySuccessAlert() {
        cy.get(this.selectorList().successAlert).should('be.visible');
    }

    returnToTransactions() {
        cy.get(this.selectorList().returnToTransactions).click();
    }

    navigateToPersonalTab() {
        cy.get(this.selectorList().personalTab).click();
    }

    selectTransaction(amount) {
        cy.contains(`-$${amount}.00`).first().click();
    }

    verifyTransaction(amount) {
        this.verifySuccessMessage(amount);
        this.verifySuccessAlert();
        this.returnToTransactions();
        this.navigateToPersonalTab();
        this.selectTransaction(amount);
    }
}
export default TransactionPage;
*/
