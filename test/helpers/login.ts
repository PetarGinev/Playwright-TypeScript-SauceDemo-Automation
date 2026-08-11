// Constants
export const STANDARD_USERNAME = process.env.STANDARD_USERNAME!;
export const STANDARD_PASSWORD = process.env.STANDARD_PASSWORD!;
export const LOCKED_OUT_USER = process.env.LOCKED_OUT_USER!;
export const PROBLEM_USER = process.env.PROBLEM_USER!;
export const PERFOMANCE_GLITCH_USER = process.env.PERFOMANCE_GLITCH_USER!;
export const ERROR_USER = process.env.ERROR_USER!;
export const VISUAL_USER = process.env.VISUAL_USER!;

export const ERROR_MESSAGE = "Epic sadface: Username and password do not match any user in this service";
export const LOCKED_OUT_USER_ERROR_MESSAGE = "Epic sadface: Sorry, this user has been locked out.";
export const USERNAME_ERROR_MESSAGE = "Epic sadface: Username is required";
export const PASSWORD_ERROR_MESSAGE = "Epic sadface: Password is required";

// Selectors
export const LOGIN_LOGO = ".login_logo";
export const ID_USERNAME = "#user-name";
export const ID_PASSWORD = "#password";
export const ID_LOGIN_BTN = "#login-button";
export const FORM_INPUT_ERROR = "input_error";
export const FORM_INPUT_ERROR_ICON = ".error_icon";
export const ERROR_MESSAGE_CONTAINER = "div[class*='error-message-container']";
export const LOGIN_CREDENTIALS_CONTAINER = "div[data-test='login-credentials-container']";
export const ACCEPTED_USERNAMES = "#login_credentials";
export const ACCEPTED_PASSWORDS = ".login_password";

// Helper functions
export function capitalizeLoginCredential(str: string): string {
  return str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("_");
}
