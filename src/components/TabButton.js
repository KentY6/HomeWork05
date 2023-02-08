import React from "react";

export const TabButton = ({
  tabName,
  category,
  inputNewsCategory,
  newsCategory,
}) => {
  const toggleActive = () => {
    inputNewsCategory(category);
  };

  return (
    <div
      className={newsCategory === category ? "active-tab" : "non-active-tab"}
      onClick={toggleActive}
    >
      {tabName}
    </div>
  );
};
