# CustomerDesk Dashboard

CustomerDesk is a responsive frontend prototype for managing customers and service requests. It was developed as a React and Vite application using mock data only; no backend or API integration is required.

## Technologies

- React
- Vite
- React Router
- Lucide React icons
- CSS

## Install and Run

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Main Pages and Features

- **Login:** validates email and password, shows field errors, includes a mock forgot-password message, and stores a mock session locally.
- **Dashboard:** displays time-period summary cards and a searchable, filterable, sortable recent service-request table.
- **Customers:** searches and filters customers, opens customer details, and adds customers through a validated modal form.
- **Service Requests:** provides a dedicated page for request search, status filtering, sorting, empty-state feedback, and responsive table viewing.
- **Logout:** clears the mock local session and returns the user to the login screen.

## Folder Structure

```text
src/
  components/     Reusable UI elements including tables, modal, navigation, badges, and loading state
  data/           Mock dashboard, customer, and service-request data
  layouts/        Protected dashboard layout
  pages/          Login, Dashboard, Customers, and Service Requests screens
  index.css       Shared styling and responsive breakpoints
```

## Mock Data Management

Mock records are stored in `src/data`. Components import these data modules instead of defining customer or service-request rows directly in JSX. New customers are added to the customer-page state immediately, so search and filters include them during the current session.

## Accessibility and Responsive Design

The application uses labels, focus indicators, accessible button text, and status messages. The layout adapts for desktop, tablet, and mobile screen sizes. On small screens, the sidebar becomes a slide-out menu and tables remain accessible through horizontal scrolling.

## Known Limitations

- Authentication, password reset, and data persistence are mock frontend behavior only.
- Newly added customers are held in browser memory and reset on page refresh.
- The dashboard metrics are intentionally period-based mock values.

## GitHub Pages

The Vite base path is configured for `/customer-dashboard/`. Commit the source files to the `main` branch and let the existing GitHub Pages workflow build and deploy the application. Do not commit `node_modules` or `dist`.
