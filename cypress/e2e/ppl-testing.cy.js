describe('template spec', () => {
  it('passes', () => {

    // 1. login test case 1 : menggunakan email dan password tidak benar 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('akuncoba@gmail.com')
    cy.get('input[name="password"]').type('cobacoba')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    // 1. login test case 2 : menggunakan email tidak benar dan password benar 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('akuncoba@gmail.com')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    // 1. login test case 3 : menggunakan email benar dan password tidak benar 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('admin@gmail.com')
    cy.get('input[name="password"]').type('cobacoba')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    // 1. login test case 4 : menggunakan email dan password tidak benar 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('akuncoba@gmail.com')
    cy.get('input[name="password"]').type('passbaru')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    // 1. login test case 5 : menggunakan email dan password yang benar 
    cy.visit('https://square-root-qt9w.vercel.app/login')
    cy.get('input[name="email"]').type('admin@gmail.com')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)

    // test case navigasi
    // test case 1: navigasi ke sqrt
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(1)')
      .click()
    cy.wait(5000)
    // test case 2: test navigasi ke weather
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(2)')
      .click()
    cy.wait(5000)
    cy.visit('https://square-root-qt9w.vercel.app/')
    // test case 3: test navigasi ke translate
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(3)')
      .click()
    cy.wait(5000)


    //3.kembali ke home
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > a:nth-child(1)')
      .click()
    cy.wait(5000)
    // select square root
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(1)')
      .click()

    // 4. go to squareroot 
    // sqrt test case 1 : menggunakan value 100 method local function
    cy.get('input[type="number"]')
      .type('100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(1)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)
    // sqrt test case 2 : menggunakan value 12,25 method local function
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('12.25')
      .should('have.value', '12.25')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(1)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)
    // sqrt test case 3 : menggunakan value minus -100 method local function
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('-100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(1)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)
    // sqrt test case 4 : menggunakan value string abcd method local function
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('abcd')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(1)
    cy.get('#root > div > div:nth-child(2) > button')
    // sqrt test case 5 : menggunakan value 100 method api
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('100')
      .should('have.value', '100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(2)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)
    // sqrt test case 6 : menggunakan value 12.25 method api
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('12.25')
      .should('have.value', '12.25')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(2)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    // sqrt test case 7 : menggunakan value minus -100 method api
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('-100')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(2)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)
    // sqrt test case 8 : menggunakan value string abcd method api
    cy.get('input[type="number"]').then($input => {
      $input[0].value = ''
      $input[0].dispatchEvent(new Event('input', {
        bubbles: true
      }))
    })
    cy.get('input[type="number"]')
      .should('have.value', '')
      .type('abcd')
    cy.get('#root > div > div:nth-child(2) > select')
      .select(2)
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)

    // 5. translate page
    // translate test case 1 : menggunakan text translate
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(3)')
      .click()
    cy.wait(5000)
    cy.get('#root > div > div.max-w-4xl.mx-auto.p-4 > div.flex.items-center.space-x-4.mb-4 > select:nth-child(1)')
      .select('id', {
        force: true
      })
    cy.get('#root > div > div.max-w-4xl.mx-auto.p-4 > div.flex.items-center.space-x-4.mb-4 > select:nth-child(3)')
      .select('en', {
        force: true
      })
    cy.get('#root > div > div.max-w-4xl.mx-auto.p-4 > div:nth-child(3) > textarea:nth-child(1)')
      .type('halo saya dari indonesia')
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)

    // translate test case 2 : tidak menggunakan text translate
    cy.get('button').contains('Features').first().click()
    cy.url().should('include', 'https://square-root-qt9w.vercel.app/')
    cy.get('#root > div > div > div > div > nav > div > div > div > div > a:nth-child(3)')
      .click()
    cy.wait(5000)
    cy.get('#root > div > div.max-w-4xl.mx-auto.p-4 > div.flex.items-center.space-x-4.mb-4 > select:nth-child(1)')
      .select('id', {
        force: true
      })
    cy.get('#root > div > div.max-w-4xl.mx-auto.p-4 > div.flex.items-center.space-x-4.mb-4 > select:nth-child(3)')
      .select('en', {
        force: true
      })
    cy.get('#root > div > div:nth-child(2) > button')
      .click()
    cy.wait(5000)

    // Log out
    cy.contains('Log Out').click()
  })
})