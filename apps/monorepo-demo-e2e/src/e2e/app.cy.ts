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
});
