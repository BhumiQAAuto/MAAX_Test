describe('Maxx_Tests', () => {
    
    it('verify Where to Buy functionality', () =>
    {
      cy.visit('https://maax.com/')
      cy.contains('Accept All Cookies').click()
      cy.contains('Where to Buy').click()
        .get('#geocoder').type('San Diego, California, United States{enter}')
        .get('.store-list').should('be.visible')
    });
    
    it('verify Product Search functionality', () =>
    {
      cy.visit('https://maax.com/')
      cy.contains('Accept All Cookies').click()
      cy.get('.search-input.form-control').type('bathtub{enter}',{ waitForAnimations: false })
        .url().should('include', '/search').should('include', 'bathtub')
        .get('[class*="product-list-container"]').should('exist')
    });

    it('verify Product display relevant dealers', () =>
    {
      cy.visit('https://maax.com/')
      cy.contains('Accept All Cookies').click()
      cy.get('.search-input.form-control').type('bathtub{enter}',{ waitForAnimations: false })
        .get('[class*="product-card"]').eq(0).click()
        .get('[class*="where-to-buy"]').eq(1).click()
        .get('#geocoder').type('San Diego, California, United States{enter}')
        .get('.store-list').should('be.visible')
    });
  });