enum Selectors  {
  FullName = '[formControlName="fullname"]',
  Email = '[formControlName="email"]',
  Form = '[data-cy="contact-form"]',
  Description = '[formControlName="description"]',
}

describe('Contacts tests', () => {
  it('Login has title Welcome back!', () =>   {
    cy.visit('/contact')
    cy.contains('Got anything for us? Leave a message!')

    cy.get(Selectors.FullName).type('a');
    cy.contains('Minimal length is 2 (1)');

    const maxLength = [...new Array(144)].fill('a').join('');
    cy.get(Selectors.FullName).type(maxLength);
    cy.contains('Maximal length is 128 (145)');

    // cy.get('[formControlName="email"]').type('example@domain.com');
    // cy.get('[data-cy="contacts-form"]').submit()
  })

  it('Test case contacts email field', () => {
    cy.visit('/contact')
    cy.get(Selectors.Email).type('a');
    cy.contains('Invalid email format');

    cy.get(Selectors.Email).type('{backspace}example@domain.com')
    cy.should('not.contain.text', 'Invalid email format');

    // cy.get('[formControlName="email"]').type('example@domain.com');
    // cy.get('[data-cy="contacts-form"]').submit()
  })

  it('Test case contacts description field', () => {
    cy.visit('/contact')
    const descriptionInput = cy.get(Selectors.Description)
    descriptionInput.type('a');
    cy.contains('Minimal length is 10 (1)');

    descriptionInput.type('{backspace}some long text');
    cy.should('not.contain.text','Minimal length is ');

    const longText = [...new Array(243)].fill('a').join('')
    descriptionInput.type(longText);
    cy.contains('Maximal length is 256');

    descriptionInput.type('{backspace}')
    cy.get('[data-cy="contact-form"]').submit()
  })
})
