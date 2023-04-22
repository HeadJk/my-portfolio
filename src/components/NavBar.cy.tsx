import React from 'react'
import NavBar, { NavItem } from './NavBar'

const TestMenu: React.ComponentProps<typeof NavBar>['menu'] = [
  {
    label: "Test1",
    destination: "/test1",
  },
  {
    label: "Test2",
    destination: "/test2",
  },
  {
    label: "Test3",
    destination: "/test3",
  },
]

describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar menu={TestMenu} />)
  })
  it('renders with links visible on large screens', () => {
    cy.viewport(1260, 800);
    cy.mount(<NavBar menu={TestMenu} />)
    cy.contains("Test1").should("be.visible")
    cy.contains("Test2").should("be.visible")
    cy.contains("Test3").should("be.visible")
  })
  it('renders with links hidden on small screens', () => {
    cy.viewport(360, 800);
    cy.mount(<NavBar menu={TestMenu} />)
    cy.contains("Test1").should("not.be.visible")
    cy.contains("Test2").should("not.be.visible")
    cy.contains("Test3").should("not.be.visible")
  })
})