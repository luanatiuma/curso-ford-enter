describe('Testes na Home', () => {
  it('Abre o diretório', () => {
    cy.visit('/') //diretório padrao que está no baseUrl no cypress.config
  })

  it('Abre a página Home', () => {
    cy.visit('/index.html')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Títulos da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('body > :nth-child(4)').should('have.text', 'Codspaces - ambiente/máquina virtual para codar (criar códigos). Ao entrar no github e ir em codspaces dá pra verificar as configurações do seu ambiente virtual como se fosse uma máquina realmente. ');
    cy.get('[src="./pictures/codspaces.jpg"]').click();
    cy.get(':nth-child(8)').click();
    cy.get('.titulohome > h1').should('have.text', 'Resumos sobre Tecnologia');
    /* ==== End Cypress Studio ==== */
  });
})