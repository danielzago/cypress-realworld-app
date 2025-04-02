import { be } from 'date-fns/locale'
import loginPage from '../Pages/loginPage'
import registerPage from '../Pages/registerPage'
import accountFunction from '../Pages/accountFunctions'


const loginPages = new loginPage()
const registerPages = new registerPage()
const accountFunctions = new accountFunction()

const selectorsList ={
  buttonMine: "[href='/personal']",
  users: ' jorgedobosdb, 123456aas',

}



describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser ('Heath93', 's3cret') //name and login
    accountFunctions.sendMoney('Darrel Ortiz', '66', 'Teste de envio de dinheiro') //name (for transference), amount, description
    accountFunctions.checkTransactionSuccess('66','-66.00','Teste de envio de dinheiro') //amount, amount2, description

    /* cy.get(selectorsList.buttonMine).click()

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
    cy.contains('-$66.00').first().click()*/
  })
});



describe('Enviar dinheiro com saldo insuficiente', () => {
  it.skip('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
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