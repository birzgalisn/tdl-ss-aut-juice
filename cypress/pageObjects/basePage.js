/// <reference types="cypress" />

class BasePage {
  static baseUrl = "http://localhost:3000/#";

  static visit() {
    return cy
      .visit(this.baseUrl + this.path)
      .then(this.acceptCookies)
      .then(this.closeWelcome)
      .then(this.forcePageReload);
  }

  static closeWelcome() {
    return cy.get(".close-dialog").click();
  }

  static acceptCookies() {
    return cy.get(".cc-btn").click();
  }

  static forcePageReload() {
    return cy.get(".mat-simple-snackbar-action > .mat-focus-indicator").click();
  }

  // Reusable elements
  static get email() {
    return cy.get("input[id^='email']");
  }

  static get password() {
    return cy.get("input[id^='password']");
  }

  static get submitButton() {
    return cy.get("button[type='submit']");
  }
}

export default BasePage;
