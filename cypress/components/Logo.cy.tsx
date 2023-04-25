import React from 'react'
import Logo from "@/components/Logo"
import { getThemeTokens } from '@/themes/theme'
import { hexToRgb } from '@mui/material'

describe('<Logo />', () => {
    it('renders', () => {
        cy.mount(<Logo />)
    })
    it('has appropriate colors', () => {
        const primaryColor = getThemeTokens('light').palette.primary.main

        cy.mount(<Logo color={primaryColor} />)

        cy.get('[data-testid="AdbIcon"]')
            .should('have.css', 'color')
            .and('eq', hexToRgb(primaryColor))

        cy.get('.MuiTypography-root')
            .should('have.css', 'color')
            .and('eq', hexToRgb(primaryColor))
    })
})