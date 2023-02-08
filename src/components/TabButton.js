import React from "react";

export const TabButton = ({
  tabName,
  category,
  inputNewsCategory,
  newsCategory,
}) => {
  // APIのエンドポイントにクリックしたカテゴリーを渡す
  const toggleActive = () => {
    inputNewsCategory(category);
  };

  return (
    <div
      // タブを押したカテゴリーのみアクティブにする
      className={newsCategory === category ? "active-tab" : "non-active-tab"}
      onClick={toggleActive}
    >
      {tabName}
    </div>
  );
};
