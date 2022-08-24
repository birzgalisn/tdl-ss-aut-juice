// Scenario - Login
// Click Account button
// Click Login button
// Set email value to "demo"
// Set password value to "demo"
// Click Log in
// Click Account button
// Validate that "demo" account name appears in the menu section

import * as loginFixture from "../fixtures/login.json";
import HomePage from "../pageObjects/homePage";
import LoginPage from "../pageObjects/loginPage";

context("Login", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("User can login", () => {
    LoginPage.email.type(loginFixture.user.email);
    LoginPage.password.type(loginFixture.user.password);
    LoginPage.submitButton.click();
    HomePage.accountDropdownButton.click();
    HomePage.accountDropdownOptions
      .should("be.visible")
      .contains(loginFixture.user.email);
  });
});
