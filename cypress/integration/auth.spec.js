describe("Authentication", () => {
  it("has a login button", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=login]").should("exist");
  });

  it("has a navbbar", () => {
    cy.visit("http://localhost:3000");
    cy.get("nav.navbar").should("exist");
  });

  it("has navbar options for unlogged in", () => {
    cy.visit("http://localhost:3000");
    cy.get("nav.navbar").contains("take care of you and your plant");
    cy.get("nav.navbar").contains("github");
  });

  it("has texts for unlogged in", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.container").contains("you're not logged in!");
    cy.visit("http://localhost:3000/journal");
    cy.get("div.container").contains("let's grow together");
    // this should fail once we rebase
  });

  it("has navbar options for logged in", () => {
    cy.loginAsUser();
    cy.visit("http://localhost:3000");
    cy.get("nav.navbar").contains("take care of you and your plant");
    cy.get("nav.navbar").contains("github");
    //cy.get("a.dropdown").contains("Example Guest");
    cy.get("nav.navbar").contains("journal");
    cy.visit("http://localhost:3000/journal");
    cy.get("div.container").contains("let's grow together");
  });
});
