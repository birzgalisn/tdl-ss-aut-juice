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

  static get searchButton() {
    return cy.get(".mat-search_icon-search");
  }

  static get searchField() {
    return cy.get("#mat-input-0");
  }

  static get products() {
    return cy.get(".mat-card");
  }

  static get productDialog() {
    return cy.get("[id^='mat-dialog-']");
  }
}

export default HomePage;
