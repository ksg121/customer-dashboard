function LoadingState({ label = "Loading data..." }) {
  return <div className="loading-state" role="status" aria-live="polite">{label}</div>;
}

export default LoadingState;
