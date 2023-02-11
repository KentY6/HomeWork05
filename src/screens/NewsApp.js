import React, { useEffect, useState } from "react";
import { TabButton } from "../components/TabButton";
import { SearchBar } from "../components/SearchBar";
import { Title } from "../components/Title";
import { Article } from "../components/Article";
import axios from "axios";

export const NewsApp = () => {
  // タブの名前とAPIのエンドポイントを紐づけて格納しておく。
  const articleCategory = [
    { tabName: "ビジネス", categoryName: "business" },
    { tabName: "エンターテイメント", categoryName: "entertainment" },
    { tabName: "一般", categoryName: "general" },
    { tabName: "健康", categoryName: "health" },
    { tabName: "科学", categoryName: "science" },
    { tabName: "スポーツ", categoryName: "sports" },
    { tabName: "テクノロジー", categoryName: "technology" },
  ];

  // APIで取得したデータを入れる
  const [newsArticle, setNewsArticle] = useState([]);
  // カテゴリーを入れる
  const [newsCategory, setNewsCategory] = useState(
    articleCategory[0].categoryName
  );

  // タブからアクティブなカテゴリーを引数で受け取る
  const inputNewsCategory = (categoryId) => {
    setNewsCategory(categoryId);
  };

  // 検索処理、SearchBar(component)に引数を渡してテキストフォームに入力された値を受け取る
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
    // エンドポイントのカテゴリーをStateで切り替えるようにする
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
          tabName={articleCategory[0].tabName}
          activeTabCategory={articleCategory[0].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[1].tabName}
          activeTabCategory={articleCategory[1].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[2].tabName}
          activeTabCategory={articleCategory[2].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[3].tabName}
          activeTabCategory={articleCategory[3].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[4].tabName}
          activeTabCategory={articleCategory[4].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[5].tabName}
          activeTabCategory={articleCategory[5].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
        <TabButton
          tabName={articleCategory[6].tabName}
          activeTabCategory={articleCategory[6].categoryName}
          newsCategory={newsCategory}
          inputNewsCategory={inputNewsCategory}
          newsArticle={newsArticle}
        />
      </div>
      <Article newsArticle={newsArticle} />
    </div>
  );
};
