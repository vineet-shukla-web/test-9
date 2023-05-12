import { Config } from "../support/config"
const config = Cypress.env() as Config

describe("Example Login", () => {

    beforeEach("Login", () => {
        cy.setIntercepts()
        cy.session("session1", () => {
            cy.lpLogin("qastudent@qa.dtc", config.password, { url: config.customURL, type: "ADFS" })
        })
        cy.visit(config.loginPage)
        cy.wait("@myAppsLoad")
        cy.get("app-app-loader > div").should('have.attr', 'aria-hidden', "true")
    })

    it('Apps and Folders', () => {

        cy.getByAriaLabel("Open App Library").realClick()
        cy.wait("@appLibraryLoad")

        cy.getByAriaLabel("Search All Apps", "app-library-header")
            .realClick()
            .type("automation")

        cy.get("app-library-header p")
            .contains(/automationApp1/)
            .realClick()

        cy.get("div.cl-app-wrapper")
            .should('have.length', 1)
            .find('button')
            .should('not.have.class', "remove")
            .realClick()
        cy.wait(["@addApplication", "@resetAppOrder", "@getApplications"])

        cy.get("div.cl-app-wrapper")
            .find('button')
            .should('have.class', "remove")

        cy.getByAriaLabel('close app library modal').realClick()


        cy.getByAriaLabel('automationApp1', "app-apps-container")
            .should('be.visible')
            .realClick({ button: 'right' })

        cy.get('app-dropdown-menu p')
            .contains(/Remove App/)
            .realClick()

        cy.get('app-delete-app-modal')
            .should('be.visible')
            .find('button.button-default')
            .realClick()

        cy.getByAriaLabel('automationApp1', "app-apps-container")
            .should('be.visible')
            .realClick({ button: 'right' })

        cy.get('app-dropdown-menu p')
            .contains(/Remove App/)
            .realClick()

        cy.get('app-delete-app-modal')
            .should('be.visible')
            .find('button.button-danger')
            .realClick()
        cy.wait('@deleteApplication')

        cy.getByAriaLabel('automationApp1', "app-apps-container")
            .should('not.exist')
    })
})