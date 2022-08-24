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

  static get productDialogCloseButton() {
    return cy.get(".close-dialog");
  }

  static get outsideProductDialog() {
    return cy.get(".cdk-overlay-backdrop");
  }

  static get reviewField() {
    return cy.get("textarea");
  }

  static get reviewButton() {
    return cy.get("#mat-expansion-panel-header-0");
  }

  static get reviews() {
    return cy.get(".mat-expansion-panel-body");
  }

  static get itemsPerPage() {
    return cy.get("#mat-select-value-1");
  }

  static get itemsPerPageOptions() {
    return cy.get("[id^='mat-option-']");
  }
}

export default HomePage;
