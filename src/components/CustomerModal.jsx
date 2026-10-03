import { useEffect, useState } from "react";
import Modal from "./Modal";

function CustomerModal({
  isOpen,
  onClose,
  customer,
  onAddCustomer,
  existingCustomers = [],
}) {
  const isViewing = Boolean(customer);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        status: customer.status || "",
        address: customer.address || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        status: "",
        address: "",
      });
    }

    setErrors({});
    setIsSubmitting(false);
  }, [customer, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else if (existingCustomers.some((item) => item.email?.toLowerCase() === formData.email.trim().toLowerCase())) {
      newErrors.email = "A customer with this email already exists";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Status validation
    if (!formData.status) {
      newErrors.status = "Please select a status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting || !validate()) {
      return;
    }

    setIsSubmitting(true);
    onAddCustomer({
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      id: Date.now(),
      joinedDate: new Date().toISOString().split("T")[0],
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isViewing ? "Customer Details" : "Add Customer"}
      size="medium"
    >
      {isViewing ? (
        <div className="customer-details">
          <div className="customer-detail-profile">
            <div className="large-avatar">
              {(customer.name || "Customer")
                .split(" ")
                .map((part) => part[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()}
            </div>

            <div>
              <h3>{customer.name || "Customer"}</h3>
              <p>{customer.email || "Email not provided"}</p>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span>Full Name</span>
              <strong>{customer.name || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Status</span>
              <strong>{customer.status || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Email</span>
              <strong>{customer.email || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Phone</span>
              <strong>{customer.phone || "Not provided"}</strong>
            </div>

            <div className="detail-item full-width">
              <span>Address</span>
              <strong>{customer.address || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Joined Date</span>
              <strong>{customer.joinedDate || "Not provided"}</strong>
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="customer-name">Full Name</label>

              <input
                id="customer-name"
                name="name"
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-invalid" : ""}
              />

              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="customer-email">Email</label>

              <input
                id="customer-email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-invalid" : ""}
              />

              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="customer-phone">Phone</label>

              <input
                id="customer-phone"
                name="phone"
                type="text"
                inputMode="numeric"
                maxLength="10"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-invalid" : ""}
              />

              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            {/* Status */}
            <div className="form-group">
              <label htmlFor="customer-status">Status</label>

              <select
                id="customer-status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={errors.status ? "input-invalid" : ""}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              {errors.status && (
                <span className="error-message">{errors.status}</span>
              )}
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="customer-address">Address</label>

              <textarea
                id="customer-address"
                name="address"
                rows="3"
                placeholder="Enter customer address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="primary-button" disabled={isSubmitting}>
              {isSubmitting ? "Adding Customer..." : "Add Customer"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export default CustomerModal;
