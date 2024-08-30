Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Teste de Cálculo de Frete', () => {
    beforeEach(() => {
      // Limpeza de Cookies e Armazenamento Local | Pré-requisito 1.a
      cy.clearCookies();
      cy.clearLocalStorage();
      
      // Definição de Resolução de Tela | Pré-requisito 1.b e 1.c
      cy.viewport(1366, 768);
      
    });
    
    // Teste de sucesso
    it('Deve calcular o frete com sucesso', () => {
      // Acessar a URL e o aguardo de 10 segs requisitados | Pré-requisito 1.d
      cy.visit('https://web.superfrete.com/');
      cy.wait(10000);
      cy.get('#originPostcode').type('08090-284');
      cy.get('#weight').click();
      cy.get('[data-value="0.3"]').click();
      cy.get('#packageHeight').type('2');
      cy.get('#packageWidth').type('11');
      cy.get('#packageDepth').type('16');
      cy.get('#destinationPostcode').type('05407-002');
      cy.get('[data-cy="calculator-submit"]').click();
    });

  });