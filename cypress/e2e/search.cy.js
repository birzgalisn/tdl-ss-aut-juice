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

  // Click on search icon
  // Search for Lemon
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  it("User can search", () => {
    HomePage.searchButton.click().focused();
    HomePage.searchField
      .should("be.visible")
      .type(searchFixture["lemon"].query + "{enter}");
    HomePage.products.should("have.length", 1);
    HomePage.products.contains(searchFixture["lemon"].result.title).click();
    HomePage.productDialog
      .should("be.visible")
      .contains(searchFixture["lemon"].result.description);
  });

  // Click on search icon
  // Search for 500ml
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  it("User can search for multiple products", () => {
    HomePage.searchButton.click().focused();
    HomePage.searchField
      .should("be.visible")
      .type(searchFixture["500ml"].query + "{enter}");
    HomePage.products.should("not.have.length", 1);
    HomePage.products.contains(searchFixture["500ml"].result.title).click();
    HomePage.productDialog
      .should("be.visible")
      .contains(searchFixture["500ml"].result.description);
  });

  // Click on search icon
  // Search for 500ml
  // Select a product card - Eggfruit Juice (500ml)
  // Validate that the card (should) contains "Now with even more exotic flavour."
  // Close the card
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  // Close the card
  // Select a product card - Strawberry Juice (500ml)
  // Validate that the card (should) contains "Sweet & tasty!"
  it("User can search for multiple products and view them", () => {
    HomePage.searchButton.click().focused();
    HomePage.searchField
      .should("be.visible")
      .type(searchFixture["500ml"].query + "{enter}");
    HomePage.products.should("not.have.length", 1);
    Object.values(searchFixture["500ml"].result).forEach(
      ({ title, description }) => {
        HomePage.products.contains(title).click();
        HomePage.productDialog.should("be.visible").contains(description);
        HomePage.productDialogCloseButton.scrollIntoView().click();
        // HomePage.outsideProductDialog.click({ force: true });
      }
    );
  });
});
