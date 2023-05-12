// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events"

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Sets up common interceptors, should only be called once per file
             * @example cy.setIntercepts()
             */
            setIntercepts(): void


            /**
             * Custom command to select DOM element by aria-label attribute.
             * @example cy.getByAriaLabel("profileInfo")
             */
            getByAriaLabel(label: string, tag?: string): Chainable<Element>

            /**
             * Custom command to login to LaunchPad.
             * @example cy.lpLogin("username","password")
             * @example cy.lpLogin("username","password", {url:"notqa2", schoolCode:"qa2"})
             * @example cy.lpLogin("username","password",{type:"ADFS"})
             */
            lpLogin(
                username: string,
                password: string,
                options?: {
                    type?: "AD" | "ADFS",
                    url?: string,
                    schoolCode?: string
                }
            ): void
        }
    }
}

//If you want Cypress to fail on a uncaught exception error thrown by the browser remove or comment out the following block
Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})