/// <reference types="Cypress" />

context('REST API FIRST', () => {
  
  it('REST API', () => {
    /*Just a comment to try build after commit*/
    cy
      .request('GET', '/posts')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.headers['content-type'])
          .to.eq('application/json; charset=utf-8')
        cy.expectPostIdAsc(response)
      })
  })
})