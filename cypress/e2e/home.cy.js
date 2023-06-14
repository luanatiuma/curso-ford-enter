describe('Testes na Home', () => /*isso é o mesmo que colocar function(), é para funções sem nome*/ {
  it('Abre o diretório', () => {
    cy.visit('/') //diretório padrao que está no baseUrl no cypress.config
  })

  it('Abre a página Home', () => {
    cy.visit('/index.html')
  })
})