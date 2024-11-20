describe('template spec', () => {
  it('passes', () => {
// 1. login 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('admin@gmail.com')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
// 2. auto direct to home
    // select square root
    cy.get('button').contains('Features').first().click()
    // First verify the URL
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    // Then find and click the element
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(1)')
      .click()
    // 3. go to squareroot 

    // First test : try using correct value with local function method
    cy.get('input[type="number"]')
      .type('100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(1)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()

    // Second test : try using correct value with api method
    cy.get('input[type="number"]').then($input => {
    // Clear the input programmatically
    $input[0].value = ''
    $input[0].dispatchEvent(new Event('input', { bubbles: true }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('100')
      .should('have.value', '100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(2)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()

    // Third test : try using minus value
    cy.wait(5000)
    cy.get('input[type="number"]').then($input => {
      // Clear the input programmatically
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', { bubbles: true }))
      })
      cy.get('input[type="number"]')
        .should('have.value', '')
        .type('-100')
        .should('have.value', '100')
      cy.get('#root > div > div:nth-child(2) > select')
        .select(2)
      cy.get('#root > div > div:nth-child(2) > button')
        .click()

    // Fourth test : try using string value
    cy.wait(5000)
    cy.get('input[type="number"]').then($input => {
      // Clear the input programmatically
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', { bubbles: true }))
      })
      cy.get('input[type="number"]')
        .should('have.value', '')
        .type('akar')
        .should('have.value', 'akar')
      cy.get('#root > div > div:nth-child(2) > select')
        .select(2)
      cy.get('#root > div > div:nth-child(2) > button')
        .click()

    // Log out
    cy.wait(5000)
    // cy.contains('Log Out').click()

// 4. go to translate
// 5. go to weather
  })
})