import React from "react";

export const Article = ({ newsArticle, notFoundSign, filterNewsArticle }) => {
  return (
    <div
      className={notFoundSign === false ? "all-article" : "non-active-searched"}
    >
      <div>
        件数：
        {filterNewsArticle.length === 0
          ? newsArticle.length
          : filterNewsArticle.length}
        件
      </div>
      {newsArticle.map((source, index) => (
        <div
          className="article"
          // 記事をクリックするとリンク先に飛ぶ
          onClick={() => window.open(source.url)}
          key={index}
        >
          <h3 className="title">{source.title}</h3>
          <p className="description">{source.description}</p>
        </div>
      ))}
    </div>
  );
};
