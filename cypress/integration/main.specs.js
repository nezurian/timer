beforeEach(() => {
    cy.visit("http://localhost:3000")
})

// Top Navigation Bar, consists of three sections: Add (Category), Category Bar, Settings (General)
describe("Topbar", () => {
    it("Renders", () => {
        cy.get("[data-cy=Topbar-Main]").should("be.visible")
    })


    describe("Add button", () => {
        it("renders", () => {
            cy.get("[data-cy=Topbar-Add]").should("be.visible")
        })
    });

    describe("Settings Button", () => {
        it("renders", () => {
            cy.get("[data-cy=Topbar-Settings]").should("be.visible")
        })
    });

    describe("Category Bar & Category Menu", () => {
        it("renders", () => {
            cy.get("[data-cy=Topbar-CBar]").should("be.visible")
        })

        it("opens/closes category menu when clicked", () => {
            cy.get("[data-cy=Topbar-CBar]").click();
            cy.get("[data-cy=Topbar-CMenu]").should("be.visible");
            cy.get("[data-cy=Topbar-CBar]").click()
            cy.get("[data-cy=Topbar-CMenu]").should("not.be.visible");
        })
    })


})