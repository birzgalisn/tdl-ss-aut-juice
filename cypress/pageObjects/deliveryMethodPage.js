/// <reference types="cypress" />

import BasePage from "./basePage";

class DeliveryMethodPage extends BasePage {
  static path = "/delivery-method";

  static get deliveryMethods() {
    return cy.get(".mat-row");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }
}

export default DeliveryMethodPage;
