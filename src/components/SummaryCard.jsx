function SummaryCard({
  title,
  value,
  icon: Icon,
  description,
  iconClass = "",
}) {
  return (
    <div className="summary-card">
      <div className="summary-card-top">
        <div>
          <span className="summary-card-title">{title}</span>
          <h3>{value}</h3>
        </div>

        <div className={`summary-icon ${iconClass}`}>
          <Icon size={21} />
        </div>
      </div>

      {description && (
        <div className="summary-description">
          {description}
        </div>
      )}
    </div>
  );
}

export default SummaryCard;