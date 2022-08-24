/// <reference types="cypress" />

import BasePage from "./basePage";

class HomePage extends BasePage {
  static path = "/";

  static get accountDropdownButton() {
    return cy.get("#navbarAccount");
  }

  static get accountDropdownOptions() {
    return cy.get(".mat-menu-content");
  }
}

export default HomePage;
