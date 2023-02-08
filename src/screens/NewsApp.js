import React, { useEffect, useState } from "react";
import { TabButton } from "../components/TabButton";
import { SearchBar } from "../components/SearchBar";
import { Title } from "../components/Title";
import { Article } from "../components/Article";
import axios from "axios";

export const NewsApp = () => {
  const [newsArticle, setNewsArticle] = useState([]);
  const [newsCategory, setNewsCategory] = useState("business");

  const inputNewsCategory = (categoryId) => {
    setNewsCategory(categoryId);
  };

  // 検索処理、SearchBar(component)に引数を渡して検索値を受け取る
  const reorderWithSearch = (text) => {
    setNewsArticle(
      newsArticle.filter(
        (reorderNews) => reorderNews.title.indexOf(text) !== -1
      )
    );
  };

  // APIキー
  const apiKey = "e7bc6cbf3bea44fdbb41e749163bdc8f";

  useEffect(() => {
    // エンドポイントはカテゴリーのみ切り替えるようにする
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=jp&category=${newsCategory}&apiKey=${apiKey}`
      )
      .then((res) => {
        setNewsArticle(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    // カテゴリーがインプットされるたびにAPIを取得しなおす
  }, [newsCategory]);

  return (
    <div className="news-app">
      <Title TitleName={"News App"} />
      <SearchBar reorderWithSearch={reorderWithSearch} />
      <div className="tabs-container">
        <TabButton
          tabName={"ビジネス"}
          category={"business"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"エンターテイメント"}
          category={"entertainment"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"一般"}
          category={"general"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"健康"}
          category={"health"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"科学"}
          category={"science"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"スポーツ"}
          category={"sports"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={"テクノロジー"}
          category={"technology"}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
      </div>
      <Article newsArticle={newsArticle} />
    </div>
  );
};
