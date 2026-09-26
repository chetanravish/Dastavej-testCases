# 📋 Dastavej-TestCases

A professional **Software Development Engineer in Test (SDET)** portfolio project demonstrating **Manual Testing, API Testing, and UI Automation** for the **Dastavej** authentication module.

## Project Overview

**Dastavej** is a secure digital document locker application built on the MERN stack. This repository contains complete QA deliverables created to validate its authentication system using an industry-standard SDET workflow.

## Scope

### Authentication Module

* User Registration
* Email OTP Verification *(Manual Dependency)*
* Login
* Logout
* Protected Dashboard Access
* JWT Authentication & Session Validation

## Repository Structure

```text
Dastavej-TestCases/
├── bug-reports/             # Defect reports
├── docs/                    # Test Plan & Test Data
├── evidence/                # Execution screenshots
├── newman/                  # Newman regression reports
├── postman/                 # Postman collection & environment
├── test-cases/              # Manual test cases
├── tests/                   # Playwright automation (JavaScript)
│   ├── auth/
│   ├── pages/
│   └── utils/
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Testing Deliverables

| Deliverable                   | Status          |
| ----------------------------- | --------------- |
| Test Plan                     | ✅ Completed     |
| Test Data                     | ✅ Completed     |
| Manual Test Cases             | ✅ 20 Test Cases |
| Execution Evidence            | ✅ Available     |
| Bug Reports                   | 🔄 In Progress  |
| API Testing (Postman)         | ✅ Completed     |
| API Regression (Newman)       | ✅ Completed     |
| UI Automation (Playwright JS) | ✅ Completed     |
| HTML Test Report              | ✅ Generated     |
| CI/CD (GitHub Actions)        | ⏳ Planned       |

## Manual Testing Summary

| Metric           |    Value |
| ---------------- | -------: |
| Total Test Cases |       20 |
| Executed         |       20 |
| Passed           |       20 |
| Failed           |        0 |
| Pass Rate        | **100%** |

## Playwright Automation Summary

| Metric         |             Value |
| -------------- | ----------------: |
| Total UI Tests |                17 |
| Passed         |            **16** |
| Skipped        |             **1** |
| Failed         |             **0** |
| Framework      | Page Object Model |
| Language       |        JavaScript |

> **Note:** One test is intentionally skipped in the production environment because the Vercel deployment does not rewrite SPA routes (`/dashboard`) after browser reload. This is a deployment limitation rather than an application authentication defect.

## Tools & Technologies

* **Manual Testing**
* **Microsoft Excel**
* **Postman**
* **Newman**
* **Playwright (JavaScript)**
* **Git & GitHub**
* **VS Code**

## SDET Workflow

* ✅ Requirement Analysis
* ✅ Test Planning
* ✅ Test Data Preparation
* ✅ Manual Test Execution
* ✅ API Testing with Postman
* ✅ API Regression using Newman
* ✅ UI Automation with Playwright
* ⏳ CI/CD using GitHub Actions

## Goal

The objective of this repository is to demonstrate a complete **SDET workflow** by combining manual testing, API validation, regression testing, UI automation, defect reporting, and continuous integration on a real-world MERN application.

---

**Author:** Chetan Ravish
