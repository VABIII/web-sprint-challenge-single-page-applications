describe("Lambda Eats", ()=>{
    beforeEach(() => {
        cy.visit(`http://localhost:3000/pizza`);
    })

    const nameInput = () => cy.get("input[name=name]");
    const sizeInput = () => cy.get("select[name=size]");
    const pepperoniCheck = () => cy.get("input[name=pepperoni]");
    const sausageCheck = () => cy.get("input[name=sausage]");
    const baconCheck = () => cy.get("input[name=bacon]");
    const chickenCheck = () => cy.get("input[name=chicken]");
    const specialInput = () => cy.get("input[name=special]");
    const submitBtn = () => cy.get("button[id=order-button]");

    it("The proper elements are showing", () => {
        nameInput().should("exist");
        sizeInput().should("exist");
        pepperoniCheck().should("exist");
        sausageCheck().should("exist");
        baconCheck().should("exist");
        chickenCheck().should("exist");
        specialInput().should("exist");
        submitBtn().should("exist");

    })

    it("Can type in input", () => {
        nameInput()
            .should("have.value", "")
            .type("Vernon")
            .should("have.value", "Vernon")
    })

    it("Can check multiple toppings", () => {
        pepperoniCheck()
            .check()
        sausageCheck()
            .check()
        baconCheck()
            .check()
        chickenCheck()
            .check()
    })

    it("Can submit order form", () =>{
        nameInput()
            .should("have.value", "")
            .type("Vernon")
            .should("have.value", "Vernon");
        submitBtn()
            .click()

    })







})
















































