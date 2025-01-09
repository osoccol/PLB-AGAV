describe('monorepo-demo-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display admin', () => {
    cy.visit('/admin');
    cy.contains('admin');
  });


  it('should display login', () => {
    cy.visit('/login');
    cy.contains('login works');
  });

  it('should redirect to user', () => {
    cy.visit('/admin/settings');
    cy.url().should('eq', 'http://localhost:4200/user');
  });

  it('should fill the user-form', () => {
    cy.visit('/user');
    cy.contains('Ajouter').click();
    cy.contains('Nom');
    cy.get('#firstname').click();
    cy.get('#lastname').click().type('Fo');
    cy.contains('prénom est requis');
    cy.screenshot();
    cy.get('#firstname').click().type('Albert');
    cy.get('body').should('not.contain', 'est requis');
    cy.get('#email').click().type('albert@email.com');
    cy.get('#phone').click().type('0123456789');
    cy.contains('Créer').click();
    cy.screenshot();
  });
});
