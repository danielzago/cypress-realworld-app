class AccountFunctions {  // Class name should be capitalized as per convention
  selectorList() {  
      const selectors = {  // Variable name should be lowercase
          newTransaction: '[data-test="nav-top-new-transaction"]',
          buttonMine: "[href='/personal']",
          sendTo: '[data-test="nav-top-new-transaction"]',
          transactionDescription: '#transaction-create-description-input',
          avatarImage: '[data-test="user-list-item-_XblMqbuoP"]',
          transactionAmount: '#amount',
          transactionSubscribe: '[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)', 
          checkTransactionSuccess: '.MuiPaper-root > :nth-child(2) > .MuiGrid-container',
          alertBarSuccess: '[data-test="alert-bar-success"]',
          returnToTransactions: '[data-test="new-transaction-return-to-transactions"]',
          personalTab: '[data-test="nav-personal-tab"]', 
      }
      return selectors
  }

  accessRegisterPage() { 
      cy.visit('http://localhost:3000/signup')
  }
  
  sendMoney(name, amount, description) { 
      cy.get(this.selectorList().buttonMine).click()
      cy.get(this.selectorList().newTransaction).click()
      cy.get(this.selectorList().sendTo).type(name)
      cy.get(this.selectorList().avatarImage).first().click()
      cy.get(this.selectorList().transactionAmount).type(amount)
      cy.get(this.selectorList().transactionDescription).type(description)
      cy.get(this.selectorList().transactionSubscribe).click()
  }

  checkTransactionSuccess(amount, amount2, description) { 
    cy.get(this.selectorList().checkTransactionSuccess).should('have.text', 'Paid $${amount} for ${description}')
    cy.get(this.selectorList().alertBarSuccess).should('be.visible')
    cy.get(this.selectorList().returnToTransactions).click()
    cy.get(this.selectorList().personalTab).click()

}
}



export default AccountFunctions
/*
describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {

    cy.get(selectorsList.buttonMine).click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Darrel Ortiz')
    cy.get('.MuiAvatar-img').first().click()
    cy.get('#amount').type('66')
    cy.get('#transaction-create-description-input').type('Teste de envio de dinheiro')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiGrid-container').should('have.text', 'Paid $${amount} for Teste de envio de dinheiro')
    cy.get('[data-test="alert-bar-success"]').should('be.visible')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.contains('-$66.00').first().click()
  })
});



describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser ('jorgedobosdb', '123456aas')
    cy.get(selectorsList.buttonMine).click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Darrel Ortiz')
    cy.get('.MuiAvatar-img').first().click()
    cy.get('#amount').type('66')
    cy.get('#transaction-create-description-input').type('Teste de envio de dinheiro')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiGrid-container').should('have.text', 'Paid $66.00 for Teste de envio de dinheiro')
    cy.get('[data-test="alert-bar-success"]').should('be.visible')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.contains('-$66.00').first().click()
  });
});
   cy.get(selectorsList.buttonMine).click()

   cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Darrel Ortiz')
    cy.get('[data-test="user-list-item-_XblMqbuoP"]').first().click()
    cy.get('#amount').type('66')
    cy.get('#transaction-create-description-input').type('Teste de envio de dinheiro')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiGrid-container').should('have.text', 'Paid $66.00 for Teste de envio de dinheiro')
    cy.get('[data-test="alert-bar-success"]').should('be.visible')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.contains('-$66.00').first().click()
  })

*/