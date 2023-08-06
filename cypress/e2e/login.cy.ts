describe('My First Test', () => {
  it('Login has title Welcome back!', () => {
    cy.visit('/login')
    cy.contains('Welcome back!')

    cy.get('[data-cy="email"').type('example@domain.com');
    cy.get('[data-cy="password"').type('123456789');
    cy.get('[data-cy="submit"').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })
})
