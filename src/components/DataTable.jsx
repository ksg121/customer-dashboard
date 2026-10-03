function DataTable({ columns, data, rowKey, renderRow, emptyState }) {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => <th key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? data.map((item) => renderRow(item, rowKey(item))) : (
            <tr><td colSpan={columns.length}>{emptyState}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
