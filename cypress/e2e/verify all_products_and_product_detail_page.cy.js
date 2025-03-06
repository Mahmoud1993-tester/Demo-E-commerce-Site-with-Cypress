describe('verify all products and product detail page', ()=> {
    beforeEach(()=> {
        cy.visit('/')
    });
    it('Verify that home page is visible successfully', ()=> {
        cy.get('[alt="Website for automation practice"]').should('be.visible')
        cy.contains('a', 'Home').should('be.visible')
    });

    describe('all products and product details page', ()=> {
        beforeEach(()=>{{
            cy.contains('a', 'Products').click()
        }});

        it('navigate to all products page', ()=> {
            cy.url().should('eq', 'https://automationexercise.com/products')
            cy.get('[class="features_items"]').should('be.visible')
        });

        it('product details page', ()=> {
            cy.contains('a', 'View Product').first().click()
            cy.url().should('include', '/product_details')
            cy.contains('h2', 'Blue Top').should('be.visible') // product name 
            cy.contains('p', 'Category').should('be.visible')  // product category 
            cy.contains('span', 'Rs. 500').should('be.visible') // product price 
            cy.contains('b', 'Availability:').should('be.visible') // procduct availability 
            cy.contains('b', 'Condition:').should('be.visible')  // product condition 
            cy.contains('b', 'Brand:').should('be.visible') // product brand
           
    
        })
    })
})