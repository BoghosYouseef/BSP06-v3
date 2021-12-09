Given('I am on the "user-login" page', () => {

    cy.visit("http://localhost:8080/user-login")
    cy.title().should('eq',"User Login Page")
})

When('I enter "George312"', () => {

    cy.get('input[type="text"]').should("be.visible").type("George312")
})

And('I enter "hsj%2*sc5$3"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$3")   
})


And('I Click the "Submit" button', () => {
    cy.intercept('api/users',
        {
            "body": { "isAuthenticated": false}
        }
      ).as("loginUserWrong")
    cy.visit("http://localhost:8080/user-login")

    cy.get('button[id="LoginBtn"]').should('be.visible').click()
    cy.wait(2000)
    cy.wait("@loginUserWrong")
})
Then('I should see written in a window user "Login Failed! wrong password"', () => {

    cy.get("modal").contains("Login Failed! wrong password").should("be.visible")
})
