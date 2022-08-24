/// <reference types="cypress" />

import BasePage from "./basePage";

class PaymentOptionsPage extends BasePage {
  static path = "/payment/shop";

  static get cards() {
    return cy.get(".mat-row");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }
}

export default PaymentOptionsPage;
