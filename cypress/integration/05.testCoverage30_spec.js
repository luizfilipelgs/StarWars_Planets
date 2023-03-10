import { getId } from '../utils/getId';

describe('5 - Desenvolva testes para atingir 30% de cobertura total da aplicação', () => {
  it('Cobertura de "Statements" total deverá ser maior ou igual a 30.', () => {
    cy.task('getCoverage', getId()).its('total.statements.pct', { timeout: 0 }).should('be.gte', 30.00);
  });

  it('Cobertura de "Functions" total deverá ser maior ou igual a 30.', () => {
    cy.task('getCoverage', getId()).its('total.functions.pct', { timeout: 0 }).should('be.gte', 30.00);
  });

  it('Cobertura de "Lines" total deverá ser maior ou igual a 30.', () => {
    cy.task('getCoverage', getId()).its('total.lines.pct', { timeout: 0 }).should('be.gte', 30.00);
  });
});
