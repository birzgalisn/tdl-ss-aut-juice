/// <reference types="cypress" />

import BasePage from "./basePage";

class SelectAddressPage extends BasePage {
  static path = "/address/select";

  static get addresses() {
    return cy.get(".mat-row");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }
}

export default SelectAddressPage;
