
## Project Title
OpenHRM Automation using Cypress for TIERIV by Arun
### Pre-requisite
- Node JS  (https://nodejs.org/en)
- NPM (https://www.npmjs.com/)

### Test Scope
- Login Page
- Home Page

### About Framework
- Page Object Model
- Data Driven testing

### Setup Details
- Clone the project 
- Open project in VSCode 
- Run `npm i` in terminal
- Run `npx cypress run`

### Test Results

### Test Cases

**1. Valid Credentials - Successful Login:**

**Input**: Valid username and password.

**Expected Result**: User should be logged in successfully and directed to the dashboard.

**2. Invalid Username - Failed Login:**

**Input: Invalid username and valid password.**

**Expected Result:** User should not be able to log in and should receive an error message indicating invalid credentials.

**3. Invalid Password - Failed Login:**

**Input: Valid username and invalid password.**

**Expected Result:** User should not be able to log in and should receive an error message indicating invalid credentials.

**4. Empty Username and Password - Failed Login:**

**Input: Empty username and password fields.**

**Expected Result:** User should not be able to log in and should receive an error message indicating both fields are required.

**5. Valid Username, Empty Password - Failed Login:**

**Input:** Valid username and empty password field.

**Expected Result:** User should not be able to log in and should receive an error message indicating the password field is required.

**6. Reset Password - Confirm reset password link:**

**Input:** Go to login page -> Enter Username -> Click on reset password btn -> 

**Expected Result:** User should be able see - 'Reset Password link sent successfully' .
