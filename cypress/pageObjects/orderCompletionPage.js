/// <reference types="cypress" />

import BasePage from "./basePage";

class OrderCompletionPage extends BasePage {
  static path = "/order-completion";

  static get message() {
    return cy.get(".confirmation");
  }
}

export default OrderCompletionPage;
