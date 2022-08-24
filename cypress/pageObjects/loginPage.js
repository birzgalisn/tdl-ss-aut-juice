/// <reference types="cypress" />

import BasePage from "./basePage";

class LoginPage extends BasePage {
  static path = "/login";

  static get notYetCustomerButton() {
    return cy.get("a[routerLink='/register']");
  }
}

export default LoginPage;
