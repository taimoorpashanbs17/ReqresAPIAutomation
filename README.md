# Reqres API Automation Framework - Cypress

This project demonstrates an API automation framework built using **Cypress**, organized with the **Page Object Model (POM)** pattern, and includes features like **JSON schema validation** , **dynamic data generation** and **Mochawesome reporting**.

## Features

- **Cypress**: Used as the automation framework.
- **Page Object Model**: Organized API endpoints into reusable classes.
- **JSON Schema Validation**: Ensures API responses conform to defined schemas.
- **Dynamic Data Generation**: Generates unique values using a custom `getFormattedDateTime` method.
- **Custom Cypress Commands**: Simplifies repetitive tasks.
- **Mochawesome Reports**: Comprehensive and visually rich test execution reports.

---

## Project Structure
```bash

cypress/
├── e2e/
│   ├── api-tests/
│   │   ├── createUser.spec.js         # Tests for creating a user
│   │   ├── getUserInfo.spec.js        # Tests for retrieving user information
│   │   ├── registerLoginLogout.spec.js # Tests for registration, login, and logout
│   │   ├── updateDeleteUser.spec.js   # Tests for updating and deleting a user
├── schemas/
│   ├── createUserSchema.json          # JSON schema for create user validation
│   ├── getUserInfoSchema.json
│   ├──deleteUserSchema.json         # JSON schema for retrieving user info validation
├── support/
│   ├── commands.js                    # Custom Cypress commands
│   ├── pages/
│   │   ├── baseApiPage.js             # Base class for API requests
│   │   ├── userApiPage.js             # Page object for user-related API endpoints
│   │   ├── loginRegisterApiPage.js    # Page object for login and registration API endpoints
├── package.json                       # Project dependencies and scripts
├── reports 
│   ├── mochawesome-report/            # Directory for generated HTML reports
│   ├── merged-report.json             # Merged JSON report                           
└── README.md                          # Project documentation
```


## Prerequisites

- Git
- Node.js (>=14.x)
- npm or yarn
- Cypress installed globally or locally as a dev dependency.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/taimoorpashanbs17/ReqresAPIAutomation.git
   cd ReqresAPIAutomation

2. Install Dependencies
   ```bash
   npm install
   ```



## Running Test Cases
   1. Running All Tests
      ```bash
      npm run run-all-test-regression
   2. Running Specific Test Case:
      ```bash
      npx cypress run --spec cypress/e2e/api-tests/<test-file>.spec.js
      ```
      
      e.g. If you want to run all test cases of Create Users API, then
      ```bash
      npx cypress run --spec cypress/e2e/api-tests/createUser.spec.js
      ```

## Generating Mochawesome Reports
### Automate Report Generation:
Run all tests, merge JSON reports, and generate the final HTML report in one command:

   ``` bash
   npm run generate-open-html-report
   ```

## Writing Test Cases
### Example: Creating a User

```bash
describe('Create User API Tests', () => {
  it('should create a user successfully', () => {
    const newUser = {
      name: `John_${formattedDateTime}`,
      job: 'Developer',
    };

    userApiPage.createUser(newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', `John_${formattedDateTime}`);
      expect(response.body).to.have.property('job', 'Developer');
      expect(response.body).to.have.property('id');
    });
  });
});
```

## Directory Details

- `cypress/e2e/api-tests/` : Contains the actual test files for API requests.

- `cypress/schemas/`: Contains JSON schema files to validate API responses.

- `cypress/support/`: Contains custom commands and Page Object Model classes for reusability.

- `commands.js`: Custom Cypress commands like getFormattedDateTime.
pages/: Contains Page Object Model classes like userApiPage.js for user-related API endpoints.

- `cypress/reports/`: Stores Mochawesome JSON and HTML reports.

## Contributing
1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch.
4. Make changes or add tests.
5. Create a pull request for review.
