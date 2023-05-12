
describe('Azure Login', () => {
  it('Login User', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.get('.btn-login').click();
    cy.wait(1000);
    cy.get('#login_windowslink').click();
    var azureUser = Cypress.env('AZURE_USER');
    var userDomain = azureUser.split("@");

    //=======for outlook domain==========//
    if (userDomain[1] == "outlook.com") {
      cy.origin(Cypress.env('MICROSOFT_ONLINE'), () => {
        cy.get('.ltr_override').type(Cypress.env('AZURE_USER'))
        cy.contains('Next').click();
      });
      cy.origin(Cypress.env('MICROSOFT_LIVE'), () => {
        cy.get('#i0118').type(Cypress.env('AZURE_PASSWORD'));
        cy.contains('Sign in').click()
        cy.contains('Yes').click()
      })
      
      cy.get('.menu-options').click();
      cy.get('.text-danger').click();
    } else {
      cy.origin(Cypress.env('MICROSOFT_ONLINE'), () => {
        cy.get('.ltr_override').type(Cypress.env('AZURE_USER'))
        cy.contains('Next').click();
        cy.get('#i0118').type(Cypress.env('AZURE_PASSWORD'));
        cy.contains('Sign in').click()
        cy.contains('Yes').click()
      });
      cy.get('.menu-options').click();
      cy.get('.text-danger').click();
    }
  })
})