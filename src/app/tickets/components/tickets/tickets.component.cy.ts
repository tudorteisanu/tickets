import { TicketsComponent } from './tickets.component'

describe('CounterComponent', () => {
  it('can mount and display an initial value of 0', () => {
    cy.mount(TicketsComponent)
    cy.get('[data-cy=count]').contains(0)
  })

  it('can increment the count', () => {
    cy.mount(TicketsComponent)
  })
})
