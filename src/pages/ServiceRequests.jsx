import { useEffect, useMemo, useState } from "react";
import { ClipboardList, Search } from "lucide-react";
import LoadingState from "../components/LoadingState";
import RequestTable from "../components/RequestTable";
import { serviceRequests } from "../data/serviceRequests";

function ServiceRequests() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("date");

  useEffect(() => setIsLoading(false), []);

  const requests = useMemo(() => {
    return serviceRequests
      .filter((request) => status === "All" || request.status === status)
      .filter((request) => {
        const searchableText = `${request.id || ""} ${request.customer || ""} ${request.service || ""}`;
        return searchableText.toLowerCase().includes(search.toLowerCase());
      })
      .sort((first, second) => {
        if (sort === "customer") return (first.customer || "").localeCompare(second.customer || "");
        if (sort === "status") return (first.status || "").localeCompare(second.status || "");
        return new Date(second.date || 0) - new Date(first.date || 0);
      });
  }, [search, status, sort]);

  return (
    <div className="customers-page">
      <div className="page-intro">
        <div>
          <h2>Service Requests</h2>
          <p>Search, filter, and review customer service activity.</p>
        </div>
      </div>

      <section className="customers-card">
        <div className="customer-toolbar">
          <div className="search-box">
            <Search size={18} />
            <input aria-label="Search service requests" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search requests..." />
          </div>
          <div className="filter-group">
            <select aria-label="Request status" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option>All</option><option>Pending</option><option>In Progress</option><option>Completed</option>
            </select>
            <select aria-label="Sort service requests" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="date">Sort by date</option><option value="customer">Sort by customer</option><option value="status">Sort by status</option>
            </select>
          </div>
        </div>

        <div className="customer-count">
          <ClipboardList size={17} />
          <span>Showing <strong>{requests.length}</strong> of <strong>{serviceRequests.length}</strong> requests</span>
        </div>

        {isLoading ? <LoadingState label="Preparing service requests..." /> : <RequestTable requests={requests} />}
      </section>
    </div>
  );
}

export default ServiceRequests;
