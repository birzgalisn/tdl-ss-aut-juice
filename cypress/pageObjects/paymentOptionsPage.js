/// <reference types="cypress" />

import BasePage from "./basePage";

class PaymentOptionsPage extends BasePage {
  static path = "/payment/shop";

  static cards(digits) {
    return cy.get(".mat-row").contains(digits).get("mat-radio-button");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }
}

export default PaymentOptionsPage;
