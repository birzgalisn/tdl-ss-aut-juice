/// <reference types="cypress" />

import BasePage from "./basePage";

class RegisterPage extends BasePage {
  static path = "/register";

  static get modalTitle() {
    return cy.get("h1");
  }

  static get repeatPassword() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestionButton() {
    return cy.get("mat-select[role='combobox']");
  }

  static get securityQuestionOptions() {
    return cy.get("mat-option[id^='mat-option-']");
  }

  static get answer() {
    return cy.get("#securityAnswerControl");
  }

  static get message() {
    return cy.get(".mat-simple-snack-bar-content");
  }
}

export default RegisterPage;
