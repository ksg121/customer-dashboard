import DataTable from "./DataTable";
import StatusBadge from "./ui/StatusBadge";

function RequestTable({ requests, emptyMessage = "No service requests found." }) {
  return (
    <DataTable
      columns={["Request ID", "Customer", "Service", "Status", "Date"]}
      data={requests}
      rowKey={(request) => request.id}
      emptyState={<div className="empty-state"><h3>{emptyMessage}</h3><p>Try changing your search or filter.</p></div>}
      renderRow={(request, key) => (
        <tr key={key}>
          <td><strong>{request.id || "Not available"}</strong></td>
          <td>{request.customer || "Not provided"}</td>
          <td>{request.service || "Not provided"}</td>
          <td><StatusBadge status={request.status || "Pending"} /></td>
          <td>{request.date ? new Date(request.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Not provided"}</td>
        </tr>
      )}
    />
  );
}

export default RequestTable;
