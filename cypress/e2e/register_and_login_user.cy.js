describe('Register Page', () => {
  beforeEach(()=> {
    cy.visit('/')  
  });

  it('Verify that home page is visible successfully', () => {
    cy.get('[alt="Website for automation practice"]').should('be.visible')
  }); 

  describe('Sign-up process', () => {
     beforeEach(() => {
        cy.contains('a', 'Signup ').click();
     });

     it('sign-up fields', () => {
        cy.contains('New User Signup!').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Saber2001')
        cy.get('[data-qa="signup-email"]').type('Saber2020@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
     });

     it('Enter Account Information', () => {
        cy.get('[data-qa="signup-name"]').type('Saber2001')
        cy.get('[data-qa="signup-email"]').type('Saber2020@gmail.com')
        cy.get('[data-qa="signup-button"]').click()


        // Account Information
        cy.contains('b', 'Enter Account Information').should('be.visible')
        cy.get('[name="title"]').check()
        cy.get('[data-qa="password"]').type('445500')
        cy.get('[data-qa="days"]').select('29')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1993')
        cy.get('[name="newsletter"]').check()
        cy.get('[name="optin"]').check()

        // Address Information
        cy.contains('b', 'Address Information').should('be.visible')
        cy.get('[data-qa="first_name"]').type('Mahmoud')
        cy.get('[data-qa="last_name"]').type('Saber')
        cy.get('[data-qa="company"]').type('Glass Tec')
        cy.get('[data-qa="address"]').type('Egypt')
        cy.get('[data-qa="address2"]').type('Cairo')
        cy.get('[data-qa="country"]').should('be.visible').select('Canada')
        cy.get('[data-qa="state"]').type('British Columbia')
        cy.get('[data-qa="city"]').type('Burnaby')
        cy.get('[data-qa="zipcode"]').type('V5E 4H5')
        cy.get('[data-qa="mobile_number"]').type('+1 (604) 555-1234')
        cy.get('[data-qa="create-account"]').click()

        // continue to login page 
        cy.get('[data-qa="continue-button"]').click()

        // logout 
        cy.contains('a', 'Logout').should('be.visible').click()


     });
  });

  describe('Login User with correct email and password', ()=> {
      beforeEach(()=> {
        cy.visit('/login')
      });
      it('fill email and password fields', () =>{
        cy.get('[data-qa="login-email"]').type('Saber2020@gmail.com')
        cy.get('[data-qa="login-password"]').type('445500')
        cy.get('[data-qa="login-button"]').click()
      });
      after(()=>{
        // logout 
        cy.contains('a', 'Logout').should('be.visible').click()
      })
  });
});
