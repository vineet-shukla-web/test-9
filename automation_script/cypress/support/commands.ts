// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Chainable = Cypress.Chainable;
let myPermission
let settings
let exchangeCode

Cypress.Commands.add('setIntercepts', (): void => {
    cy.intercept({
        method: "GET",
        url: /launchpad.classlink.com.*translation.json.*/
    }).as('getTranslationFile')

    cy.intercept({
        method: "GET",
        url: /whatsnew\/v1p0\/products/
    }).as('myAppsLoad')

    cy.intercept({
        method: "GET",
        url: /https:\/\/application-autocomplete.classlink.io\/paged\/v1p0\/allAppsForProfile/
    }).as('appLibraryLoad')

    cy.intercept({
        method: "PUT",
        url: /myapps\/getapp/
    }).as("addApplication")

    cy.intercept({
        method: "PUT",
        url: /applications\/orderreset/
    }).as("resetAppOrder")

    cy.intercept({
        method: "GET",
        url: /v2\/applications/
    }).as("getApplications")

    cy.intercept({
        method: "DELETE",
        url: /deleteapplication/
    }).as("deleteApplication")

    cy.intercept({
        method: "GET",
        url: /v1p0\/myPermission/
    }, (req) => {

        if (myPermission) req.reply(myPermission)


        else req.continue((res) => { myPermission = res.body })

    }).as("myPermission")

    cy.intercept({
        method: "GET",
        url: /v1p0\/settings/
    }, (req) => {

        if (settings) req.reply(settings)

        else req.continue((res) => { settings = res.body })

    }).as("settings")

    cy.intercept({
        method: "GET",
        url: /myapps.*exchangeCode/
    }, (req) => {
        if (exchangeCode) req.reply(exchangeCode)

        else req.continue((res) => { exchangeCode = res.body })
    }).as("myAppsExchangeCode")
})

Cypress.Commands.add('getByAriaLabel', (label, tag): Chainable => {
    return cy.get(`${tag ? tag + " " : ""}[aria-label="${label}"]`)
})

Cypress.Commands.add('lpLogin', (username, password, options?) => {

    cy.visit(`launchpad.classlink.com/${options ? (options.url ? options.url : "login") : "login"}`)
    cy.wait('@getTranslationFile')

    if (!options || !options.type || options.type === "AD") {

        cy.get("#username").realClick()
        cy.realType(username)

        cy.get('#password').realClick()
        cy.realType(password)

        if (options.schoolCode) {
            cy.get('#code').realClick()
            cy.realType(options.schoolCode)
        }

        cy.get('#signin').realClick()
        cy.wait('@myAppsLoad')

    } else if (options.type === "ADFS") {

        let adfsLoginURL
        cy.intercept(/.signinwithsaml.*/, (req) => {

            req.on('before:response', () => {
                adfsLoginURL = req.url
            })

            req.reply({})

        }).as('adfsLoginRequest')

        cy.intercept(/adfs\/ls\/idpinitiatedsignon.aspx/).as("adfsLoginPage")

        cy.get('button[title="Sign in with SAML"]').realClick()
        cy.wait('@adfsLoginPage')

        cy.get('#userNameInput').realClick()
        cy.realType(username)

        cy.get('#passwordInput').realClick()
        cy.realType(password)

        cy.get('#submitButton').realClick()
        cy.wait('@adfsLoginRequest').then(() => {
            cy.request({ method: "GET", url: adfsLoginURL, followRedirect: false })
                .then((res) => {
                    return res.body.match(/https.*/)[0]
                }).then((redirectUrl) => {
                    cy.request({ method: "GET", url: decodeURI(redirectUrl), followRedirect: false })
                        .then((res) => {
                            return res.body.match(/https.*/)[0]
                        })
                }).then((loginUrl) => {
                    cy.visit(loginUrl)
                    cy.wait('@myAppsLoad')
                })

        })
    }
    cy.getByAriaLabel("Show Profile Info").should('be.visible')
})