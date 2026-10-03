# CustomerDesk — Customer Service Management Dashboard

## Project Overview

CustomerDesk is a frontend-only customer service management dashboard developed across **Day 1, Day 2, and Day 3**.

The project demonstrates a complete frontend workflow for:

- Login and logout
- Dashboard overview
- Dashboard date filtering
- Customer management
- Service request management
- Search, filtering, and sorting
- Add Customer workflow
- Customer details
- Form validation
- Loading and empty states
- Responsive UI
- Final testing and cleanup

The application uses **mock data only**. No backend, database, or API integration is required.

---

# 1. Technology Stack
 
 Technology                       Purpose

   React                   Frontend UI and component architecture
   Vite                    Development server and production build
   JavaScript / JSX        Application logic
   React Router DOM        Client-side navigation
   Lucide React            Icons
   CSS                     Styling and responsive layouts
   JavaScript Mock Data    Customers, dashboard and service requests
   GitHub                  Version control and source hosting
   GitHub Pages            Static deployment

---

# 2. Development Timeline

```text
DAY 1
Initial UI and project structure
        ↓
DAY 2
Functional interactions and reusable components
        ↓
DAY 3
Final workflow, validation, edge cases,
responsive design, cleanup and documentation
```

---

# 3. Day 1 — Initial Application

## Objective

Day 1 focused on creating the initial React/Vite frontend foundation and main screens.

## Work Completed

### Project Setup

Created the initial Vite/React application with:

- `package.json`
- `package-lock.json`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`

### Login Screen

Created the initial login interface containing:

- Email field
- Password field
- Login button
- Password visibility interaction
- Initial validation structure

### Dashboard

Created the initial dashboard with:

- Dashboard heading
- Overview section
- Summary cards
- Service-management information

### Customers Page

Created the customer-management screen with:

- Customer list
- Customer information
- Customer status
- Add Customer interaction foundation

### Reusable Components

Initial reusable components included:

- Sidebar
- Header
- Summary Card
- Modal
- Data Table
- Status Badge

### Mock Data

Customer and service-request information was separated from UI components so that data was not unnecessarily hardcoded inside JSX.

---

# 4. Day 2 — Functional Dashboard Implementation

## Objective

Day 2 converted the initial UI into an interactive frontend prototype while continuing to use mock data.

## Work Completed

### Login

Implemented:

- Email validation
- Password validation
- Validation messages
- Successful login navigation
- Demo login state
- Logout support
- Password visibility toggle
- Demo forgot-password flow

The demo login state uses browser storage:

```javascript
localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("userEmail", form.email);
```

This is frontend demonstration logic and is not real authentication.

### Dashboard Summary Cards

Made dashboard summary cards data-driven using separate mock data.

### Dashboard Date Filters

Added:

- Today
- This Week
- This Month

Changing the filter updates the displayed mock values.

### Service Requests

Implemented:

- Search
- Status filtering
- Basic sorting
- No-results state
- Dedicated Service Requests page

### Customers

Implemented:

- Customer search
- Status filtering
- Add Customer modal
- Customer form
- Basic validation
- Customer details modal

### Reusable Components

Added/refined:

- `LoadingState`
- `RequestTable`
- `DataTable`
- `CustomerModal`
- `Modal`
- `Sidebar`
- `SummaryCard`
- `StatusBadge`

### Mock Data

Organized data into separate modules such as:

```text
src/data/
├── customers.js
├── dashboard.js
└── serviceRequests.js
```

---

# 5. Day 3 — Final Application Polish

## Objective

Day 3 focuses on making the application stable, consistent, responsive, and ready for final review.

The priority is **stable functionality rather than unnecessary new features**.

## End-to-End Workflow

The complete workflow is verified:

```text
Login
  ↓
Dashboard
  ↓
Customers
  ↓
Add Customer
  ↓
Customer Details
  ↓
Service Requests
  ↓
Logout
  ↓
Login
```

## Login Improvements

Final testing covers:

- Empty email
- Invalid email
- Empty password
- Password visibility
- Successful login
- Logout
- Forgot-password feedback

## Customer Validation

The final workflow handles:

- Empty required fields
- Invalid email
- Invalid phone
- Duplicate customer email
- Multiple form submissions
- Long input values

Example messages:

```text
Name is required
Email is required
Please enter a valid email
A customer with this email already exists
```

## Customer Data Consistency

After adding a customer:

```text
Add Customer
      ↓
Validation
      ↓
Update React state
      ↓
Customer appears immediately
      ↓
Search/filter can find it
```

## Empty and No-Results States

The application handles:

```text
No customers available
No customers found
No service requests found
```

## Modal Handling

Modals support:

- Open
- Close
- Cancel
- Submit
- Validation errors
- Customer details
- Add Customer form

Closing a modal without submitting does not create incomplete records.

## UI Consistency

Final UI work covers:

- Consistent spacing
- Typography
- Buttons
- Forms
- Tables
- Status badges
- Modal layouts
- Error messages
- Visual states

## Responsive Design

The application is designed for:

- Desktop
- Tablet

Responsive considerations include:

- Sidebar behavior
- Tables
- Forms
- Modals
- Long text
- Buttons
- Inputs

## Accessibility

The final application uses:

- Meaningful labels
- Form labels
- Clear button actions
- Readable text
- Focus-friendly controls

## Dynamic Dashboard Greeting

The dashboard greeting can use the current time and logged-in user:

```text
Good morning, Kumar 👋
Good afternoon, Kumar 👋
Good evening, Kumar 👋
```

The greeting should be generated from the current time and the username should come from the logged-in user information rather than being permanently hardcoded.

## Code Cleanup

Final cleanup covers:

- Unused components
- Unused variables
- Unused imports
- Duplicate logic
- Unnecessary files
- Hardcoded customer rows
- Console errors
- Unnecessary complexity

---

# 6. Application Workflow

## Login

```text
Open Application
      ↓
Login Page
      ↓
Enter Email + Password
      ↓
Validation
      ↓
Successful Login
      ↓
Dashboard
```

## Dashboard

```text
Dashboard
├── Dynamic Greeting
├── Summary Cards
├── Date Filter
└── Recent Service Requests
```

## Customers

```text
Customers
├── Search
├── Status Filter
├── Add Customer
│   ├── Name
│   ├── Email
│   ├── Phone
│   └── Status
└── Customer Details
```

## Service Requests

```text
Service Requests
├── Search
├── Status Filter
├── Sorting
└── No Results State
```

## Logout

```text
Logout
   ↓
Clear Demo Login State
   ↓
Login
```

---

# 7. Main Features

## Authentication-like Frontend Flow

- Login
- Email/password validation
- Login state
- Logout
- Forgot-password demonstration

> This is frontend demo authentication only.

## Dashboard

- Summary cards
- Mock dashboard values
- Today / This Week / This Month filters
- Recent service requests
- Dynamic greeting

## Customer Management

- Search
- Status filter
- Add customer
- Validation
- Duplicate email handling
- Customer details

## Service Request Management

- Search
- Status filter
- Sorting
- Empty/no-results state

---

# 8. Project Architecture

The project follows a component-based architecture:

```text
Pages
  ↓
Layouts
  ↓
Reusable Components
  ↓
Mock Data
```

Example:

```text
Customers.jsx
     ↓
CustomerModal
     ↓
Modal
     ↓
React State
     ↓
customers.js
```

---

# 9. Folder Structure

```text
customer-dashboard/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── StatusBadge.jsx
│   │   ├── CustomerModal.jsx
│   │   ├── DataTable.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingState.jsx
│   │   ├── Modal.jsx
│   │   ├── RequestTable.jsx
│   │   ├── Sidebar.jsx
│   │   └── SummaryCard.jsx
│   │
│   ├── data/
│   │   ├── customers.js
│   │   ├── dashboard.js
│   │   └── serviceRequests.js
│   │
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   │
│   ├── pages/
│   │   ├── Customers.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── ServiceRequests.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# 10. Mock Data Management

Mock data is kept outside UI components.

```text
src/data/
├── customers.js
├── dashboard.js
└── serviceRequests.js
```

Data flow:

```text
Mock Data
    ↓
React State
    ↓
Search / Filter / Sort
    ↓
Reusable Components
    ↓
User Interface
```

This structure makes future API integration easier.

---

# 11. State Management

The application uses React hooks such as:

```javascript
useState()
useEffect()
```

No Redux or external global-state library is required.

Customer creation follows:

```text
Form Input
    ↓
Form State
    ↓
Validation
    ↓
setCustomers()
    ↓
Customer List
```

---

# 12. Validation and Error Handling

## Login

- Empty email
- Invalid email
- Empty password
- Password validation

## Customer

- Empty name
- Empty email
- Invalid email
- Invalid phone
- Duplicate email

## Search

- No matching customers
- No matching service requests

## Dataset

- Empty datasets
- Missing optional fields

---

# 13. Responsive Design

The application is designed for desktop and tablet layouts.

Responsive considerations include:

- Sidebar adaptation
- Flexible dashboard layout
- Responsive forms
- Table overflow handling
- Modal sizing
- Long text handling
- Usable buttons and inputs

---

# 14. Installation

## Prerequisites

Install:

- Node.js
- npm
- Git (optional)

## Clone Repository

```bash
git clone https://github.com/ksg121/customer-dashboard.git
cd customer-dashboard
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 15. Available Commands

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

# 16. GitHub Pages Deployment

The project is configured for GitHub Pages using Vite.

`vite.config.js`:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  base: "/customer-dashboard/",
});
```

GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

The workflow builds the Vite application and deploys the production output to GitHub Pages.

## Repository

https://github.com/ksg121/customer-dashboard

## Live Application

https://ksg121.github.io/customer-dashboard/

---

# 18. Edge Cases

The final application should handle:

- Invalid email format
- Empty required fields
- Duplicate customer email
- Search with no results
- Filters returning no results
- Closing modal without submitting
- Repeated form submission
- Long customer names
- Long email addresses
- Long phone values
- Empty mock data
- Missing optional fields

---

# 19. Known Limitations

The application is a frontend prototype.

Therefore:

1. No backend API is connected.
2. No database is connected.
3. Login is not real authentication.
4. Forgot-password does not send a real email.
5. Customer changes are frontend state only.
6. Mock data is not permanently stored in a database.
7. GitHub Pages hosts only the static frontend.

---

# 20. Future Improvements

Possible production enhancements:

### Backend

```text
React
  ↓
REST API
  ↓
FastAPI / Node.js
  ↓
PostgreSQL / MySQL
```

### Authentication

- JWT authentication
- Password hashing
- Refresh tokens
- Role-based access control

### Customer Management

- Edit customer
- Delete customer
- Pagination
- Server-side filtering
- Customer history

### Service Requests

- Create request
- Update request
- Assign request
- Priority
- Comments
- Request history

### Testing

- Unit tests
- Integration tests
- End-to-end tests

---

# 21. Final Deliverables

The final Day-3 submission includes:

1. **Final working frontend application**
2. **Clean React/Vite source code**
3. **Reusable components**
4. **Mock data modules**
5. **README documentation**
6. **Testing checklist**
7. **Responsive desktop/tablet UI**
8. **GitHub Pages deployment**
9. **Final demonstration workflow**
10. **Known limitations and future improvements**

---

# 22. Final Project Summary

## Day 1

Built the initial frontend foundation:

```text
React + Vite
Login
Dashboard
Customers
Reusable UI
Mock Data
```

## Day 2

Added functional interactions:

```text
Validation
Search
Filtering
Sorting
Date Filters
Customer Creation
Customer Details
Service Requests
Loading/Empty States
Reusable Components
```

## Day 3

Finalized the application:

```text
End-to-End Workflow
Edge-Case Handling
Duplicate Validation
UI Consistency
Responsive Design
Accessibility
Dynamic Greeting
Code Cleanup
Testing
Documentation
Production Verification
```

CustomerDesk is therefore a review-ready frontend prototype demonstrating:

- React component architecture
- React state management
- Client-side routing
- Form validation
- Search/filter/sort functionality
- Reusable UI components
- Mock-data management
- Responsive frontend development
- Git/GitHub workflow
- GitHub Pages deployment

---

# Repository

**GitHub:**  
https://github.com/ksg121/customer-dashboard

**Live Application:**  
https://ksg121.github.io/customer-dashboard/
