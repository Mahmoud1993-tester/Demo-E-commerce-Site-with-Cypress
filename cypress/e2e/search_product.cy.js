describe('verify search product is visible', ()=> {
    beforeEach(()=> {
        cy.visit('/')
    });
    it('verify that home page is visible successfully', ()=> {
        cy.get('[alt="Website for automation practice"]').should('be.visible')
        cy.contains('a', 'Home').should('be.visible')
    });
    describe('search product test', ()=> {
        beforeEach(()=> {
            cy.contains('a', 'Products').click()
        });

        it('navigate to all products page', ()=> {
            cy.url().should('eq', 'https://automationexercise.com/products')
            cy.get('[class="features_items"]').should('be.visible')
        });
        it('input product in search input', ()=> {
            cy.get('[name="search"]').type('Men Tshirt')
            cy.get('[type="button"]').click()
            cy.get('.col-sm-4').eq(1).should('be.visible')
              
        });
       
    })
})