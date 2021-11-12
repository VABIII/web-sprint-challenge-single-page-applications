describe("Lambda Eats", ()=>{
    beforeEach(() => {
        cy.visit(`http://localhost:3000/pizza`);
    })

    const nameInput = () => cy.get("input[name=name");

    it("The proper elements are showing", () => {
        nameInput().should("exist");
    })







})
















































