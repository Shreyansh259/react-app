import React from "react";

import "./LoadingIndicator.scss";

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <div className="loading-indicator-icon">🍔</div>
      <div className="loading-indicator-message">Please Wait...</div>
    </div>
  );
};

export default LoadingIndicator;
