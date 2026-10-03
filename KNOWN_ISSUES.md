# Known Limitations

The application is intentionally a frontend-only prototype.

- Login accepts any valid email and non-empty password; it does not verify real credentials.
- The forgot-password action only displays a mock confirmation and does not send email.
- Customer additions are stored in React state and are lost after a browser refresh.
- Dashboard metrics and service requests use static mock data.
- There is no backend API, database, user role management, or persistent session service.

These limitations are expected for the current project scope and can be addressed when backend integration is introduced.
