

describe('contact us form', ()=> {
    beforeEach(()=> {
       cy.visit('/contact_us')
    });
    it('fill contact us form', ()=> {
       cy.get('[data-qa="name"]').type('Mahmoud') // name field 
       cy.get('[data-qa="email"]').type('Mahmoud2020@gmail.com')  // e-mail field
       cy.get('[data-qa="subject"]').type('login problem')        // subject field
       cy.get('[data-qa="message"]').type('User unable to log in despite correct credentials. Password reset fails. System shows error message but does not specify the issue')
      
       // choose file upload button 
       const filePath = 'Introduction.pdf'
       cy.get('input[type="file"]').attachFile(filePath)
       cy.get('input[type="file"]').should('be.visible')
       cy.get('input[type="file"]').then(($input)=>{
         expect($input[0].files.length).to.be.greaterThan(0)
         expect($input[0].files[0].name).to.be.equal('Introduction.pdf')
       })


       // click submit button
       cy.get('[data-qa="submit-button"]').click()

       // return to home page 
       cy.contains('a', 'Home').click()



    })

})