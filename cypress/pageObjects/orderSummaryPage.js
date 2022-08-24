/// <reference types="cypress" />

import BasePage from "./basePage";

class OrderSummaryPage extends BasePage {
  static path = "/order-summary";

  static get placeOrderButton() {
    return cy.get("#checkoutButton");
  }
}

export default OrderSummaryPage;
