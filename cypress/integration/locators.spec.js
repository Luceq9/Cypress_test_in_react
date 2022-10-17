/// <reference types="cypress"/>

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {

        // Get all elements wih tag name
        cy.get("button");

        // Get all elements with class btn-elements
        cy.get(".btn-with-class")

        // Get all elements with specific classes 
        cy.get("[class='Elements-btn btn-with-class'")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes'")

        //Get all elements with id
        cy.get("#btn-with-id")

        // Get all elements by spec
        cy.get("[type='submit']")

        //Get all element with tag and class
        cy.get("button.Elements-btn")

        //Get all elements by tag name AND class AND id
        cy.get("button.Elements-btn#btn-with-id")

        //Get all elements by tag name AND class AND type attribute
        cy.get("button.Elements-btn[type='submit']")

        //Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")
    })


    it("locating elements with contains", () => {
        //Get element with unique test
        cy.contains("Unique Text")

        //Get element by text
        cy.contains("Not Unique Text")

        // With Selector 
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")

        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("locating elements find", () => {
        // get element with id Form-1 and class btn-1
        cy.get("#form-1").find(".btn-1")
         // get element with id Form-2 and class btn-2
        cy.get("#form-1").find(".btn-2")
    } )

})
