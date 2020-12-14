
const searchTerm1 = 'test'
const searchTerm2 = 'laskdjfask fla'

describe('Test index page', () => {
  it('Should load root path without errors', () => {
    cy.visit('/')
  })
})

describe('Test search functionality', () => {

  it('Should return results for "'+ searchTerm1 +'" search string', () => {
    cy.visit('/')
    cy.get('input.mdc-text-field__input').type(searchTerm1)
    cy.get('button[type="submit"]').click().get('ul.mdc-list')
  })

  it('Should not return results for "'+ searchTerm2 +'" search string', () => {
    cy.visit('/')
    cy.get('input.mdc-text-field__input').type(searchTerm2)
    cy.get('button[type="submit"]').click().get('[data-cy=no-results-msg]')
  })

})

describe('Test pagination', () => {

  it('Should show total number of pages for:"' + searchTerm1 +'"', () => {
    cy.visit('/search/'+ searchTerm1 +'/1')
    cy.get('[data-cy=total-pages]').should('contain.text', 'Total pages')
  })

  it('Should be disabled previous button for first page', () => {
    cy.visit('/search/'+ searchTerm1 +'/1')
    cy.get('[data-cy=prev-btn]').should('not.exist')
  })

  it('Should be disabled next button for last page', () => {
    cy.visit('/search/test/16')
    cy.get('[data-cy=next-btn]').should('not.exist')
  })

  it('Should return no results for page out of range and not break', () => {
    cy.visit('/search/'+ searchTerm1 +'/1000')
    cy.get('[data-cy=no-results-msg]')
  })

  it('Should return no results for malformed page number: ---', () => {
    cy.visit('/search/'+ searchTerm1 +'/---')
    cy.get('[data-cy=no-results-msg]')
  })

})