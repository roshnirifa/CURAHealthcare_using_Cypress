
describe('Login functionality', () => {
 

  it('login with valid credential', () => {
    cy.viewport(1367, 768);
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type("John Doe");
    cy.get('#txt-password').type("ThisIsNotAPassword")
    cy.get('#btn-login').click();
  })
  it('login with invalid credential', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type("John ");
    cy.get('#txt-password').type("NotAPassword")
    cy.get('#btn-login').click();
    cy.get(".lead.text-danger").should("have.text", "Login failed! Please ensure the username and password are valid.")
  })
})