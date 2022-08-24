// Click on search icon
// Search for Lemon
// Select a product card - Lemon Juice (500ml)
// Validate that the card (should) contains "Sour but full of vitamins."

import * as loginFixture from "../fixtures/login.json";
import * as searchFixture from "../fixtures/search.json";
import HomePage from "../pageObjects/homePage";
import LoginPage from "../pageObjects/loginPage";

context("Search", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.email.type(loginFixture.user.email);
    LoginPage.password.type(loginFixture.user.password);
    LoginPage.submitButton.click();
  });

  it("User can search", () => {
    HomePage.searchButton.click().focused();
    HomePage.searchField
      .should("be.visible")
      .type(searchFixture.query + "{enter}");
    HomePage.products.contains(searchFixture.result.title).click();
    HomePage.productDialog
      .should("be.visible")
      .contains(searchFixture.result.description);
  });
});
