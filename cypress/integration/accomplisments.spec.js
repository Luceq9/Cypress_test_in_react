/// <reference types="cypress" />

describe("Accomplisment Dashboard", () => {
    beforeEach(()=> {
        cy.visit("/accomplishments")
    })

    it("should showcase error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishments")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        //cy.contains("accomplishment-checkbox").click()
        cy.get("[data-cy='accomplishment-checkbox']").click()
       // cy.contains("Submit Accomplishment").click()
       //cy.contains("Complete the items above to continue").click()
        cy.get(".Accomplishment-btn").click()
        cy.contains("This Accomplisment was Successfully Submitted")
        cy.get(".Accomplishment-btn").click()
        // cy.contains(".Accomplishment-spinner-container")
    })

    it("should return back to accomplishment dashboard with empty inputs when Go back", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishments")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click();
        cy.contains("Go Back").click();
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[type='checkbox']").should("not.be.checked")

    })


    



})