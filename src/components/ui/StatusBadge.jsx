function StatusBadge({ status }) {
  const statusClass = status
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <span className={`status-badge ${statusClass}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;