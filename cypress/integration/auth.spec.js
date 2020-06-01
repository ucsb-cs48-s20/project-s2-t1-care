describe("Authentication", () => {
  it("has a login button", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=login]").should("exist");
  });

  it("shows me navbar options for unlogged in", () => {
    cy.visit("http://localhost:3000");
    cy.get(".navbar-nav").contains("take care of you and your plant");
    cy.get(".navbar-nav").contains("github");
  });

  it("shows me navbar options for logged in", () => {
    cy.visit("http://localhost:3000");
    cy.get(".navbar-nav").contains("take care of you and your plant");
    cy.get(".navbar-nav").contains("github");
  });
});
