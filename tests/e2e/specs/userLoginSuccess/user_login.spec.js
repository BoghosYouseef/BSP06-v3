Given('I am on the "user-login" page', () => {

    cy.visit("http://localhost:8080/user-login")
    cy.title().should('eq',"User Login Page")
})

When('I enter "George312"', () => {

    cy.get('input[type="text"]').should("be.visible").type("George312")
})

And('I enter "hsj%2*sc5$"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
})

And('I Click the "Submit" button', () => {
    cy.intercept("GET", "api/users", (req) => {
        req.reply(
            {
                "body": { "isAuthenticated1": true,
                          "isAuthenticated2": false}
            }
        )}
      ).as("loginUser")
    
    cy.get('button[id="LoginBtn"]').should('be.visible').click()
    cy.wait(2000)
    cy.wait("@loginUser")

    
})
Then('I should see written in a window user "George312 is now logged in!"', () => {

    cy.get("p").contains('user "George312 is now logged in!"').should("be.visible")


})

