import { useEffect, useMemo, useState } from "react";
import { Plus, Search, Eye, UsersRound } from "lucide-react";

import CustomerModal from "../components/CustomerModal";
import LoadingState from "../components/LoadingState";
import StatusBadge from "../components/ui/StatusBadge";
import { customers as initialCustomers } from "../data/customers";

function Customers() {
  const [customerList, setCustomerList] = useState(initialCustomers);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  useEffect(() => {
    if (!successMessage) return undefined;
    const timer = window.setTimeout(() => setSuccessMessage(""), 3000);
    return () => window.clearTimeout(timer);
  }, [successMessage]);

  const filteredCustomers = useMemo(() => {
    return customerList.filter((customer) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        (customer.name || "").toLowerCase().includes(searchText) ||
        (customer.email || "").toLowerCase().includes(searchText) ||
        (customer.phone || "").includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        customer.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [customerList, search, statusFilter]);

  const handleAddCustomer = (newCustomer) => {
    setCustomerList((previous) => [
      newCustomer,
      ...previous,
    ]);
    setSuccessMessage("Customer added successfully.");
  };

  const openAddModal = () => {
    setSelectedCustomer(null);
    setIsModalOpen(true);
  };

  const openDetailsModal = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="customers-page">
      <div className="page-intro">
        <div>
          <h2>Customers</h2>
          <p>Manage your customer information and accounts.</p>
        </div>

        <button className="primary-button" onClick={openAddModal}>
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      <section className="customers-card">
        {successMessage && <div className="success-message" role="status">{successMessage}</div>}
        <div className="customer-toolbar">
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              aria-label="Search customers"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Status:</label>

            <select
              value={statusFilter}
              aria-label="Customer status filter"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="customer-count">
          <UsersRound size={17} />

          <span>
            Showing <strong>{filteredCustomers.length}</strong> of{" "}
            <strong>{customerList.length}</strong> customers
          </span>
        </div>

        {isLoading ? <LoadingState label="Preparing customers..." /> : <div className="table-container">
          <table className="data-table customer-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="table-customer">
                        <div className="table-avatar">
                          {(customer.name || "Customer")
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .substring(0, 2)
                            .toUpperCase()}
                        </div>

                        <div>
                          <strong>{customer.name || "Customer"}</strong>
                          <span>{customer.address || "Address not provided"}</span>
                        </div>
                      </div>
                    </td>

                    <td className="breakable-cell">{customer.email || "Not provided"}</td>

                    <td>{customer.phone || "Not provided"}</td>

                    <td>
                      <StatusBadge status={customer.status} />
                    </td>

                    <td>{customer.joinedDate || "Not provided"}</td>

                    <td>
                      <button
                        className="icon-action-button"
                        title="View customer"
                        onClick={() => openDetailsModal(customer)}
                      >
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="empty-state">
                      <UsersRound size={40} />

                      <h3>No customers found</h3>

                      <p>
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>}
      </section>

      <CustomerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        customer={selectedCustomer}
        onAddCustomer={handleAddCustomer}
        existingCustomers={customerList}
      />
    </div>
  );
}

export default Customers;
