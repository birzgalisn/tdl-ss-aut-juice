// Click Account button
// Login button
// Click "Not yet a customer?"
// Find - how to generate random number in JS
// Use that number to genarate unique email address, e.g.: email_7584@ebox.com
// Save that email address to some variable
// Fill in password field and repeat password field with same password
// Click on Security Question menu
// Select  "Name of your favorite pet?"
// Fill in answer
// Click Register button
// Set email value to previously created email
// Set password value to previously used password value
// Click login button
// Click Account button
// Validate that account name (with previously created email address) appears in the menu section

import * as registerFixture from "../fixtures/register.json";
import HomePage from "../pageObjects/homePage";
import LoginPage from "../pageObjects/loginPage";
import RegisterPage from "../pageObjects/registerPage";

let email = `email_${Math.floor(Math.random() * 10 * 10 * 10 * 10)}@ebox.com`;

context("Register", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("User can register", () => {
    LoginPage.notYetCustomerButton.click();
    RegisterPage.modalTitle.should("have.text", registerFixture.modal.title);
    RegisterPage.email.type(email);
    RegisterPage.password.type(registerFixture.user.password);
    RegisterPage.repeatPassword.type(registerFixture.user.password);
    RegisterPage.securityQuestionButton.click();
    RegisterPage.securityQuestionOptions
      .should("be.visible")
      .contains(registerFixture.user.question)
      .click();
    RegisterPage.answer.type(registerFixture.user.answer);
    RegisterPage.submitButton.click();
    RegisterPage.message
      .should("be.visible")
      .contains(registerFixture.snackBar.message);
  });

  it("Registered user can login", () => {
    LoginPage.email.type(email);
    LoginPage.password.type(registerFixture.user.password);
    LoginPage.submitButton.click();
    HomePage.accountDropdownButton.click();
    HomePage.accountDropdownOptions.should("be.visible").contains(email);
  });
});
