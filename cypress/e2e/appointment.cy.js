describe('Appointment Funtionality', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type("John Doe");
    cy.get('#txt-password').type("ThisIsNotAPassword")
    cy.get('#btn-login').click();
});
  it('Make Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
    cy.get('select').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').click();
    cy.get('#radio_program_medicaid').click();
    cy.get('#txt_visit_date').type('30/07/2023');
    cy.get('h2').click();
    cy.get('#txt_comment').type('I want to book an appointment');
    cy.get('#btn-book-appointment').click();
    cy.get('h2').should('have.text', 'Appointment Confirmation');
  })
})