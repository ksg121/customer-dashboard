import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BriefcaseBusiness,
  Clock3,
  IndianRupee,
  ArrowUpRight,
} from "lucide-react";
import { dashboardMetrics } from "../data/dashboard";

import SummaryCard from "../components/SummaryCard";
import LoadingState from "../components/LoadingState";
import RequestTable from "../components/RequestTable";
import { customers } from "../data/customers";
import { serviceRequests } from "../data/serviceRequests";

function Dashboard() {
  const [period, setPeriod] = useState("Today");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("date");
  const [isLoading, setIsLoading] = useState(true);
  const metrics = dashboardMetrics[period];
  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active"
  ).length;

  const pendingRequests = serviceRequests.filter(
    (request) => request.status === "Pending"
  ).length;
  useEffect(() => setIsLoading(false), []);
  const requests = useMemo(() => serviceRequests.filter((request) =>
    status === "All" || request.status === status
  ).filter((request) => `${request.id} ${request.customer} ${request.service}`.toLowerCase().includes(search.toLowerCase())).sort((a, b) => sort === "customer" ? a.customer.localeCompare(b.customer) : sort === "status" ? a.status.localeCompare(b.status) : new Date(b.date) - new Date(a.date)), [search, status, sort]);

  return (
    <div className="dashboard-page">
      <div className="page-intro">
        <div>
          <h2>Good morning, Kumar 👋</h2>
          <p>Here's what's happening with your services today.</p>
        </div>
        <select aria-label="Dashboard date filter" value={period} onChange={(event) => setPeriod(event.target.value)}><option>Today</option><option>This Week</option><option>This Month</option></select>
      </div>

      <div className="summary-grid">
        <SummaryCard
          title="Total Customers"
          value={metrics.customers}
          icon={Users}
          description="Registered customers"
          iconClass="blue"
        />

        <SummaryCard
          title="Active Services"
          value={metrics.services}
          icon={BriefcaseBusiness}
          description="Currently active"
          iconClass="green"
        />

        <SummaryCard
          title="Pending Requests"
          value={metrics.pending}
          icon={Clock3}
          description="Need your attention"
          iconClass="orange"
        />

        <SummaryCard
          title="Revenue"
          value={metrics.revenue}
          icon={IndianRupee}
          description="This month"
          iconClass="purple"
        />
      </div>

      <section className="dashboard-section">
        <div className="customer-toolbar"><div className="search-box"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search requests..." /></div><div className="filter-group"><select value={status} onChange={(event) => setStatus(event.target.value)}><option>All</option><option>Pending</option><option>In Progress</option><option>Completed</option></select><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="date">Sort by date</option><option value="customer">Sort by customer</option><option value="status">Sort by status</option></select></div></div>
        <div className="section-header">
          <div>
            <h3>Recent Service Requests</h3>
            <p>Latest customer service activity</p>
          </div>

          <Link to="/service-requests" className="text-button">
            View all
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {isLoading ? <LoadingState label="Preparing recent requests..." /> : <RequestTable requests={requests} />}
      </section>

      <section className="dashboard-bottom-grid">
        <div className="info-card">
          <div className="info-card-header">
            <h3>Customer Overview</h3>
          </div>

          <div className="customer-overview">
            <div>
              <span>Total</span>
              <strong>{customers.length}</strong>
            </div>

            <div>
              <span>Active</span>
              <strong>{activeCustomers}</strong>
            </div>

            <div>
              <span>Inactive</span>
              <strong>{customers.length - activeCustomers}</strong>
            </div>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <h3>Quick Summary</h3>
          </div>

          <div className="quick-summary">
            <p>
              <span className="summary-indicator green" />
              {activeCustomers} active customers
            </p>

            <p>
              <span className="summary-indicator orange" />
              {pendingRequests} pending requests
            </p>

            <p>
              <span className="summary-indicator blue" />
              {serviceRequests.length} recent requests
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
