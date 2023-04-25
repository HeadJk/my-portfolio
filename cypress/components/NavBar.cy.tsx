import React from 'react'
import NavBar, { NavItem } from '../../src/components/NavBar'
import AppContextProvider from '@/context/AppContext'

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

function eachMenuItemShould(chainers: string, value?: any) {
  TestMenu.forEach(navItem => cy.contains(navItem.label).should(chainers, value))
}

function eachCondensedMenuItemShould(chainers: string, value?: any) {
  TestMenu.forEach(navItem => cy.get(".MuiMenu-list").contains(navItem.label).should(chainers, value))
}

describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar menu={TestMenu} />)
  })
  it('renders with links visible on large screens', () => {
    cy.viewport(1260, 800);
    cy.mount(<NavBar menu={TestMenu} />)

    eachMenuItemShould("be.visible")
  })
  it('renders with links hidden on small screens', () => {
    cy.viewport(360, 800);
    cy.mount(<NavBar menu={TestMenu} />)

    eachMenuItemShould("not.be.visible")
  })
  it('renders with links visible after pressing button on small screens', () => {
    cy.viewport(360, 800);
    cy.mount(<NavBar menu={TestMenu} />)

    eachMenuItemShould("not.be.visible")
    eachCondensedMenuItemShould("not.be.visible")

    cy.get('[data-testid="MenuIcon"]').click();

    eachMenuItemShould("not.be.visible")
    eachCondensedMenuItemShould("be.visible")
  })
  it('toggles dark mode', () => {
    cy.viewport(360, 800);
    cy.mount(<AppContextProvider><NavBar menu={TestMenu} /></AppContextProvider>)

    eachMenuItemShould("not.be.visible")
    eachCondensedMenuItemShould("not.be.visible")

    // Initial state depends on OS. Toggle to light mode by default
    cy.get('.MuiButtonBase-root').get('[data-testid="Brightness7Icon"]')
      .then(elem => {
        cy.get('.MuiButtonBase-root').get('[data-testid="Brightness7Icon"]').click()
      })

    cy.get('[data-testid="Brightness4Icon"]').should("be.visible")
    cy.get('.MuiButtonBase-root').get('[data-testid="Brightness4Icon"]').click()
    cy.get('[data-testid="Brightness7Icon"]').should("be.visible")
    cy.get('.MuiButtonBase-root').get('[data-testid="Brightness7Icon"]').click()
    cy.get('[data-testid="Brightness4Icon"]').should("be.visible")

  })
})