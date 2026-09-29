Dastavej — SDET Test Automation

End-to-end QA automation project for Dastavej, a digital document/family locker application.





📌 Overview

This repository contains the software testing and test automation suite for Dastavej.

The project follows a practical SDET workflow:

Manual Testing → API Testing → UI Automation → CI/CD

The current scope focuses primarily on authentication and session-management flows, with automated API regression, Playwright UI tests, test evidence, documentation, and continuous execution through GitHub Actions.

🧪 Testing Scope

User registration

Existing-user registration validation

Email and password validation

OTP-related authentication scenarios

User login

Invalid credentials

Unregistered-user login

Protected API access

Access-token refresh

Logout

Session persistence

Browser back behavior after logout

Protected-route behavior

Responsive UI validation

OTP scenarios requiring access to a real email inbox remain manual because the production OTP flow depends on email delivery.

1. Manual Testing

The authentication flow was manually tested using 20 documented test cases.

Artifacts:

test-cases/
└── Dastavej_Auth_TestCases_Professional.xlsx

docs/
├── TestPlan.md
└── TestData.md

bug-reports/
└── Bug_Report_Authentication_v2.xlsx

evidence/
└── authentication/
    ├── TC001_Pass.png
    ├── TC002_Pass.png
    └── ...

The executed authentication suite passed without requiring a functional bug report.

2. API Testing — Postman & Newman

API regression testing is implemented with Postman and executed from the command line using Newman.

Current automated coverage

10 API requests

34 assertions

Positive and negative authentication scenarios

Protected endpoint validation

Refresh-token validation

Logout validation

Main endpoints

Method

Endpoint

Purpose

POST

/api/auth/register

User registration

POST

/api/auth/login

User login

GET

/api/auth/getme

Protected user information

POST

/api/auth/refresh-token

Access-token refresh

GET

/api/auth/logout

Logout

Run API regression locally

.\newman\run_newman.bat

Sensitive login credentials are supplied at runtime rather than stored in the committed Postman environment.

3. UI Automation — Playwright

UI automation is built with Playwright and uses the Page Object Model.

tests/
├── api/
├── pages/
│   ├── DashboardPage.js
│   ├── HomePage.js
│   └── LoginPage.js
├── ui/
│   ├── login.spec.js
│   ├── logout.spec.js
│   ├── protected-route.spec.js
│   ├── register.spec.js
│   └── responsive.spec.js
└── utils/

Run UI tests

npx playwright test

View the report

npx playwright show-report

🔐 Test Data & Secrets

Production/test login credentials are not hardcoded in the repository.

Local execution uses:

TEST_USER_EMAIL
TEST_USER_PASSWORD

GitHub Actions receives these values through repository secrets.

The committed Postman environment contains no real login credentials.

⚙️ CI/CD — GitHub Actions

The complete regression pipeline runs automatically through GitHub Actions.

Git Push / Pull Request
        ↓
Checkout Repository
        ↓
Setup Node.js
        ↓
Install Dependencies
        ↓
Install Playwright Browsers
        ↓
Newman API Regression
        ↓
Playwright UI Tests
        ↓
Upload Playwright Report
        ↓
Pass / Fail

Workflow:

.github/
└── workflows/
    └── tests.yml

The workflow runs for pushes to main and pull requests targeting main.

📊 Latest Automation Result

Latest successful Newman run:

Requests:             10
Failed requests:       0

Test scripts:         10
Failed test scripts:   0

Assertions:           34
Failed assertions:     0

Average API response time during that run:

844 ms

Playwright UI tests also passed locally, and the GitHub Actions workflow completed successfully with the Playwright report uploaded as an artifact.

📁 Repository Structure

Dastavej-testCases/
│
├── .github/
│   ├── agents/
│   └── workflows/
│       └── tests.yml
│
├── bug-reports/
├── docs/
├── evidence/
│   └── authentication/
│
├── newman/
│   ├── reports/
│   └── run_newman.bat
│
├── postman/
│   ├── collections/
│   └── environments/
│
├── test-cases/
├── tests/
│   ├── api/
│   ├── pages/
│   ├── ui/
│   └── utils/
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js

🛠️ Technology Stack

Area

Technology

Application

Dastavej

Frontend

React / Vite

Backend

Node.js / Express

Database

MongoDB

API Testing

Postman

API CLI Runner

Newman

UI Automation

Playwright

Language

JavaScript

Test Architecture

Page Object Model

CI/CD

GitHub Actions

API Deployment

Render

Web Deployment

Vercel

🚀 Getting Started

Prerequisites

Node.js

npm

Git

Clone

git clone https://github.com/chetanravish/Dastavej-testCases.git
cd Dastavej-testCases

Install dependencies

npm ci

Configure local credentials

Create .env in the project root:

TEST_USER_EMAIL=your_verified_test_email
TEST_USER_PASSWORD=your_test_password

.env is ignored by Git.

Run Playwright

npx playwright test

Run Newman

Set the required credentials in the current shell and run:

.\newman\run_newman.bat

🧠 SDET Practices Demonstrated

Manual test case design

Positive and negative testing

Authentication testing

API functional testing

API regression automation

UI automation

Page Object Model

Test data management

Environment variables

Secret management

CLI test execution

Test reporting

CI/CD integration

Git/GitHub workflow

Regression testing

Responsive UI validation

📈 Automation Architecture

                    Dastavej Application
                           │
              ┌────────────┴────────────┐
              │                         │
             APIs                       UI
              │                         │
        Postman/Newman             Playwright
              │                         │
              └────────────┬────────────┘
                           │
                     Regression
                           │
                    GitHub Actions
                           │
                  Reports / Results

📌 Project Status

Completed

Manual authentication test suite

Test evidence

Test plan

Test data documentation

Postman API collection

Newman CLI execution

API regression assertions

Playwright UI automation

Page Object Model

Environment-based test credentials

GitHub Secrets

GitHub Actions CI pipeline

Playwright CI artifact reporting

Future Improvements

Cross-browser execution

Additional API coverage

More negative UI scenarios

Accessibility testing

Visual regression testing

Test tagging and selective execution

Expanded reporting and historical test metrics

👨‍💻 Author

Chetan Ravish

This project is part of my SDET / Test Automation portfolio and demonstrates the progression from manual QA to automated API, UI, and CI/CD testing.

📄 License

This project is intended for learning, portfolio, and demonstration purposes.