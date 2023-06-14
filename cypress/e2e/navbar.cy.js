describe('Testes no Menu de navegação', function (){
    beforeEach(function() { /*O beforeEach vai fazer com que a visita da página seja feita anteriormente a qualquer teste executado*/
            cy.visit('/index.html')
        });
    it('Deve conter a classe Menu', () =>{ 
        cy.get('nav').should('have.class', 'menu')
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Todos os ícones do menu devem ser visíveis', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.menu > img').should('be.visible');
        cy.get('[data-test=home]').should('be.visible');
        cy.get('[data-test=terminal]').should('be.visible');
        cy.get('[data-test=comandos]').should('be.visible');
        cy.get('[data-test=css]').should('be.visible');
        cy.get('[data-test=cadastro]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Os ícones do menu devem ter href válido', function() {
        /* ====' Generated with Cypress Studio ==== */
        cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
        cy.get('[data-test=terminal]').should('have.attr', 'href', './terminal.html');
        cy.get('[data-test=comandos]').should('have.attr', 'href', './comandosgit.html');
        cy.get('[data-test=css]').should('have.attr', 'href', './css.html');
        cy.get('[data-test=cadastro]').should('have.attr', 'href', './cadastro.html');
        /* ==== End Cypress Studio ==== */
    });
});