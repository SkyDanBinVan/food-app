// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })


describe('navbar tests', () => {
    it('can use navbar to go to home page', () => {
        cy.visit('/features')
        cy.contains('Food App').click()
        cy.url().should('equal', Cypress.config().baseUrl)
    })

    it('can use navbar to go to features page', () => {
        cy.visit('/')
        cy.contains('Features').click()
        cy.url().should('include', '/features')
    })

    it('can use navbar to go to pricing page', () => {
        cy.visit('/')
        cy.contains('Pricing').click()
        cy.url().should('include', '/pricing')
    })
    /*
    it('has navbar dropdown elements', () => {
        cy.visit('/')
        cy.contains('Dropdown').click()
        cy.should
    }) */
})

describe('recipe tests', () => {
    it('can navigate to a recipe', () => {
        cy.visit('/')
        cy.contains('Carrot Cake').click()
        cy.get('main').contains('For the carrot cake')
    })
})