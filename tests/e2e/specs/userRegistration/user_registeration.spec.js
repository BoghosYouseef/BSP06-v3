// Given('I am on the "user-registration" page', () => {

//     cy.visit("http://localhost:8080/user-registration")  
// })

// When('I enter "George312"', () => {

//     cy.get('input[type="text"]').should("be.visible").type("George312")
// })

// And('I enter "hsj%2*sc5$"', () => {

//     cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
// })

// And('I Click the "Submit" button', () => {

//     cy.intercept("POST", "/data-base", (req) => {

//         req.reply({ username:"George312",
//                     password:"hsj%2*sc5$",
//                     isRegisterd: 0})

//     }).as("registerUser")

//     cy.get('button[id="RegisterUserBtn"]').should('be.visible').click()
//     cy.wait(2000)
//     cy.wait("@registerUser")

// })
// Then('I should see written in a window User "George312 has been registered successfully!"', () => {

//     cy.get("modal").contains("User George312 has been registered successfully!")
// })



// // // #############################################



// Given('I am on the "user-registration" page', () => {

//     cy.visit("http://localhost:8080/user-registration")  
// })

// When('I enter "Michael"', () => {

//     cy.get('input[type="text"]').should("be.visible").type("Michael")
// })

// And('I enter "hsj%2*sc5$"', () => {

//     cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
// })

// And('I Click the "Submit" button', () => {

//     cy.intercept("POST", "/data-base", (req) => {

//         req.reply({ username:"Michael",
//                     password:"hsj%2*sc5$",
//                     isRegisterd: 1})

//     }).as("registerUser1")

//     cy.get('button[id="RegisterUserBtn"]').should('be.visible').click()
//     cy.wait(2000)
//     cy.wait("@registerUser1")

// })
// Then('I should see written in a window "User Michael is already registered!"', () => {

//     cy.get("modal").contains("User Michael is already registered!")
// })
