describe('HAppyPath-Direccion a UI', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser');
  });

  it('registrarse', () => {
    cy.get('[data-cy="input-nombres"]').type('Daniela');
    cy.get('[data-cy="input-apellido"]').type('Timuk');
    cy.get('[data-cy="input-telefono"]').type('1234567891');
    cy.get('[data-cy="input-dni"]').type('88888888');
    cy.get('[data-cy="select-provincia"]').click().type('Córdoba{enter}');
    cy.get('[data-cy="select-localidad"]').click().type('Córdoba{enter}');
    cy.contains('dd').type('26');
    cy.contains('mm').type('08');
    cy.contains('aaaa').type('1992');
    cy.get('[data-cy="input-email"]').type('daniela84@gmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('daniela84@gmail.com');
    cy.get('[data-cy="input-password"]').type('Dd12345678*');
    cy.get('[data-cy="input-repetir-password"]').type('Dd12345678*');
    cy.get('[data-cy="btn-registrarse"]').click();
  })
})