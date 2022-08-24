/// <reference types="cypress" />

import BasePage from "./basePage";

class BasketPage extends BasePage {
  static path = "/basket";

  static get continueButton() {
    return cy.get("#checkoutButton");
  }
}

export default BasketPage;
