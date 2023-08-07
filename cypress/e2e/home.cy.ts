describe('Home page', () => {
  it('Tickets btn should navigate to /tickets!', () => {
    cy.visit('/')
    cy.get('[data-cy="tickets-btn"]').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/tickets')
    })

    cy.get('[data-cy="logo"]').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/asd')
    })
  })
})
