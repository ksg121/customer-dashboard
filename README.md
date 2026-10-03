# CustomerDesk Customer Service Management Dashboard

## Project Overview

CustomerDesk is a frontend-only customer service management dashboard developed across Day 1, Day 2, and Day 3. It demonstrates login and logout, dashboard metrics, customer management, service-request management, search, filtering, sorting, validation, loading feedback, responsive design, and final project documentation.

The application uses mock data only. No backend, database, or API integration is required.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based UI and local state management |
| Vite | Development server and production build |
| React Router DOM | Client-side navigation |
| Lucide React | User-interface icons |
| CSS | Styling, responsive layouts, and focus feedback |
| Mock data modules | Customer, dashboard, and service-request data |
| GitHub Pages | Static deployment |

## Development Timeline

```text
Day 1  Initial UI and project structure
Day 2  Functional interactions and reusable components
Day 3  Validation, edge cases, responsive design, cleanup, and documentation
```

## Day 1 Features

- React and Vite application foundation.
- Login page, dashboard, customers page, sidebar, header, summary cards, modal, data table, and status badge.
- Customer and service-request mock data stored outside UI components.

## Day 2 Features

- Email and password validation, mock login state, logout, password visibility, and demo forgot-password feedback.
- Dashboard metrics for Today, This Week, and This Month.
- Search, status filtering, sorting, and no-results feedback for service requests.
- Dedicated Service Requests page.
- Customer search, status filtering, add-customer modal, form validation, and customer details modal.
- Reusable `LoadingState`, `RequestTable`, `DataTable`, `CustomerModal`, `Modal`, `Sidebar`, `SummaryCard`, and `StatusBadge` components.

## Day 3 Finalization

- Duplicate email validation when adding a customer.
- Protection against repeated customer form submissions.
- Graceful display of missing optional customer fields.
- Success, loading, empty, validation-error, and no-results feedback.
- Responsive desktop, tablet, and mobile layout.
- Accessible labels, visible focus styles, modal dialog semantics, and Escape-key modal closing.
- README, testing checklist, and known-limitations handover files.

## Application Workflow

```text
Login
  -> Dashboard
  -> Customers
  -> Add Customer
  -> Customer Details
  -> Service Requests
  -> Logout
  -> Login
```

## Main Pages

### Login

- Validates empty fields and invalid email formats.
- Saves a mock session to browser local storage.
- Shows a demo reset-link confirmation for a valid email.

### Dashboard

- Shows four summary cards using period-based mock data.
- Provides Today, This Week, and This Month filters.
- Provides a searchable, filterable, sortable recent service-request table.

### Customers

- Searches by customer name, email, or phone number.
- Filters customers by Active or Inactive status.
- Adds a customer through a validated modal form.
- Prevents duplicate customer emails.
- Shows customer details in a modal.

### Service Requests

- Searches requests by ID, customer, or service.
- Filters requests by status.
- Sorts by date, customer, or status.
- Shows a clear no-results state.

## Project Architecture

```text
Pages
  -> Layouts
  -> Reusable Components
  -> Mock Data
```

```text
customer-dashboard/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   │   ├── ui/StatusBadge.jsx
│   │   ├── CustomerModal.jsx
│   │   ├── DataTable.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingState.jsx
│   │   ├── Modal.jsx
│   │   ├── RequestTable.jsx
│   │   ├── Sidebar.jsx
│   │   └── SummaryCard.jsx
│   ├── data/
│   │   ├── customers.js
│   │   ├── dashboard.js
│   │   └── serviceRequests.js
│   ├── layouts/DashboardLayout.jsx
│   ├── pages/
│   │   ├── Customers.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── ServiceRequests.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── KNOWN_ISSUES.md
├── TESTING_CHECKLIST.md
├── package.json
└── vite.config.js
```

## Mock Data and State Management

Mock data is stored outside UI components in `src/data/customers.js`, `src/data/dashboard.js`, and `src/data/serviceRequests.js`. Page components use React hooks such as `useState`, `useEffect`, and `useMemo` for local form, filter, loading, and customer-list state.

New customers are added immediately to the Customers-page state, so they appear in the list and can be found using search and filters during the current browser session.

## Responsive Design and Accessibility

The interface adapts for desktop, tablet, and mobile screens. On smaller screens, the sidebar becomes a slide-out menu, forms stack vertically, and tables use horizontal scrolling instead of breaking the page layout. Inputs and controls have meaningful labels and keyboard focus states. Modals can be closed using the close control, background click, Cancel button, or Escape key.

## Installation

### Prerequisites

- Node.js
- npm
- Git (optional, for version control)

### Clone and Run

```bash
git clone https://github.com/ksg121/customer-dashboard.git
cd customer-dashboard
npm install
npm run dev
```

### Available Commands

```bash
npm run dev
npm run build
npm run preview
```

## GitHub Pages Deployment

The Vite base path is configured for GitHub Pages:

```js
base: "/customer-dashboard/"
```

The `.github/workflows/deploy.yml` workflow builds and deploys the static application when changes are pushed to the `main` branch. Do not commit `node_modules` or `dist`.

- Repository: https://github.com/ksg121/customer-dashboard
- Live application: https://ksg121.github.io/customer-dashboard/

## Testing Checklist

Use [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) before a final demonstration. It covers login validation, navigation, dashboard filters, service-request search/filter/sort, customer creation, duplicate-email handling, modal behavior, long inputs, responsive layout, logout, and build verification.

## Known Limitations

- Login and password reset are frontend demonstrations only; no real authentication or email delivery occurs.
- Added customers are stored in React state and reset after a browser refresh.
- Dashboard metrics and service requests are static mock data.
- No backend API, database, role management, or persistent session service is included.

## Future Improvements

- Backend API and persistent database.
- Real authentication and role-based access control.
- Edit and delete customer actions.
- Service-request creation, assignment, priority, and history.
- Unit, integration, and end-to-end tests.

## Final Deliverables

1. Responsive React and Vite frontend application.
2. Reusable components and separate mock-data modules.
3. README, testing checklist, and known-limitations documentation.
4. GitHub Pages deployment workflow.
