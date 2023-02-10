import React from "react";

export const TabButton = ({
  tabName,
  activeTabCategory,
  inputNewsCategory,
  newsCategory,
}) => {
  // クリックしたカテゴリーを渡す
  const toggleActive = () => {
    inputNewsCategory(activeTabCategory);
  };

  return (
    <div
      // タブを押したカテゴリーのみアクティブにする
      className={
        newsCategory === activeTabCategory ? "active-tab" : "non-active-tab"
      }
      onClick={toggleActive}
    >
      {tabName}
    </div>
  );
};
