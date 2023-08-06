describe('My First Test', () => {
  it('Book tickets anywhere, all in one place', () => {
    cy.visit('/tickets')
    cy.contains('Find tickets')
  })
})
