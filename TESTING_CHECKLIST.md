# CustomerDesk Testing Checklist

Use this checklist before final submission or demonstration.

## Login and Logout

- [ ] Empty email and password show clear validation messages.
- [ ] Invalid email format shows a validation message.
- [ ] Valid email and password navigate to the dashboard.
- [ ] Forgot password requires a valid email and shows mock confirmation feedback.
- [ ] Logout returns the user to the login screen.

## Dashboard and Service Requests

- [ ] Today, This Week, and This Month update the four summary cards.
- [ ] Service-request search returns matching rows.
- [ ] Request status filter works for Pending, In Progress, and Completed.
- [ ] Date, customer, and status sorting work.
- [ ] A search with no match shows the no-results state.
- [ ] View all and the sidebar Service Requests link open the Service Requests page.

## Customers

- [ ] Customer search works with name, email, and phone number.
- [ ] Active and Inactive status filters work.
- [ ] Add Customer opens and Cancel closes the modal without creating a record.
- [ ] Required fields, invalid email, invalid phone number, and missing status show errors.
- [ ] Duplicate customer email is rejected.
- [ ] A valid new customer appears immediately in the list.
- [ ] Search and filtering include the newly added customer.
- [ ] Customer details open and display fields safely when address is missing.

## UI and Responsive Checks

- [ ] Buttons and inputs have visible keyboard focus states.
- [ ] Loading, empty, validation-error, success, and no-results states are readable.
- [ ] Desktop and tablet layouts keep content readable.
- [ ] The small-screen sidebar opens and closes correctly.
- [ ] Tables scroll horizontally on narrow screens without breaking the page.
- [ ] Long email addresses and names wrap instead of overflowing.
