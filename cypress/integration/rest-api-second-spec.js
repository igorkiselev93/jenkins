/// <reference types="Cypress" />

context('REST API SECOND', () => {
  
  it('REST API SECOND', () => {
    cy
      .request('GET','/posts/99')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.userId).to.eq(10)
        expect(response.body.id).to.eq(99)
        expect(response.body.title).not.null
        expect(response.body.body).not.null
      })
  })
})