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
    HomePage.products
      .contains(searchFixture["500ml"].result["lemon"].title)
      .click();
    HomePage.productDialog
      .should("be.visible")
      .contains(searchFixture["500ml"].result["lemon"].description);
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

  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"
  it("User can create a review", () => {
    HomePage.searchButton.click().focused();
    HomePage.searchField
      .should("be.visible")
      .type(searchFixture["raspberry"].query + "{enter}");
    HomePage.products.should("have.length", 1);
    HomePage.products.contains(searchFixture["raspberry"].result.title).click();
    HomePage.productDialog
      .should("be.visible")
      .contains(searchFixture["raspberry"].result.description);
    HomePage.reviewField.type(searchFixture["raspberry"].review);
    // HomePage.reviewField.then(($field) => {
    //   cy.wrap($field).type(searchFixture["raspberry"].review);
    // });
    HomePage.submitButton.click();
    HomePage.reviewButton.click();
    HomePage.reviews
      .should("contain", loginFixture.user.email)
      .and("contain", searchFixture["raspberry"].review);
  });

  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35
  it.only("Default amount of products", () => {
    [12, 24, 36].forEach((el, idx, arr) => {
      HomePage.products.should("have.length.at.most", el);
      HomePage.itemsPerPage.should("contain", el).click();
      HomePage.itemsPerPageOptions
        .should("be.visible")
        .contains(arr[idx + 1] ?? el)
        .click();
    });
  });
});
