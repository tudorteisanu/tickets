describe('Sing up cases', () => {
  it('Firstname validation', () => {
    cy.visit('/signup')

    cy.get('[formControlName="firstName"').click();
    cy.contains('This is required field')

    cy.get('[formControlName="firstName"').type('a');
    cy.contains('Minimal length is')

    cy.get('[formControlName="firstName"').type('aaaaaa');
    cy.should('not.contain.text','Minimal length is')
  })

  it('Lastname validation', () => {
    cy.visit('/signup')

    cy.get('[formControlName="lastName"').click();
    cy.contains('This is required field')

    cy.get('[formControlName="lastName"').type('a');
    cy.contains('Minimal length is')

    cy.get('[formControlName="lastName"').type('aaaaaa');
    cy.should('not.contain.text','Minimal length is')
  })

  it('email validation', () => {
    cy.visit('/signup')

    cy.get('[formControlName="email"').click();
    cy.contains('This is required field')

    cy.get('[formControlName="email"').type('a');
    cy.contains('Invalid email format')

    cy.get('[formControlName="email"').type('aaaaaa@domain.com');
    cy.should('not.contain.text','Invalid email format')
  })

  it('password validation', () => {
    cy.visit('/signup')

    cy.get('[formControlName="password"').click();
    cy.contains('This is required field')

    cy.get('[formControlName="password"').type('a');
    cy.contains('Minimal length is 8 ')

    cy.get('[formControlName="password"').type('aaaaaa@domain.com');
    cy.should('not.contain.text','Minimal length is 8')
    cy.should('not.contain.text','This is required field')
  })

  it('password confirmation validation', () => {
    cy.visit('/signup')

    cy.get('[formControlName="password"').type('12345678');

    cy.get('[formControlName="passwordConfirmation"').type('a');
    cy.contains('Password missmatch!')

    cy.get('[formControlName="passwordConfirmation"').type('{backspace}12345678');
    cy.should('not.contain.text','Password missmatch!')
  })

  // it('Successful redirection after sing up', () => {
  //   cy.visit('/signup')
  // })
  //
  // it('Successful redirection after sing up', () => {
  //   cy.visit('/signup')
  //
  //   cy.get('[formControlName="firstName"').type('example@domain.com');
  //   cy.get('[formControlName="lastName"').type('example@domain.com');
  //   cy.get('[formControlName="email"').type('example@domain.com');
  //   cy.get('[formControlName="password"').type('123456789');
  //   cy.get('[formControlName="passwordConfirmation"').type('123456789');
  //   cy.get('[type="submit"').click();
  //
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq('/')
  //   })
  // })
})
