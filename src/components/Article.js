import React from "react";

export const Article = ({ newsArticle }) => {
  return (
    <div className="all-article">
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
