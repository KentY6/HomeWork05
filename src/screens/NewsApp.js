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
  // 検索された記事
  const [filterNewsArticle, setFilterNewsArticle] = useState([]);

  // 検索ボタンが押されたかどうかのサイン
  const [isSearched, setIsSearched] = useState(false);

  // 検索結果が空かどうかのサイン;
  const [notFoundSign, setNotFoundSign] = useState(false);

  // タブからアクティブなカテゴリーを引数で受け取る
  const inputNewsCategory = (activeTabCategory) => {
    setNewsCategory(activeTabCategory);
    setFilterNewsArticle([]);
  };

  // 検索処理、SearchBar(component)に引数を渡してテキストフォームに入力された値を受け取る
  const reorderWithSearch = (searchWord) => {
    const newsArticleFilter = newsArticle.filter(
      (reorderNews) => reorderNews.title.indexOf(searchWord) !== -1
    );
    setFilterNewsArticle(newsArticleFilter);
  };

  // APIキー
  const apiKey = process.env.REACT_APP_API_KEY;

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

  // 検索結果が空の場合のトグル
  useEffect(() => {
    if (isSearched === true)
      if (filterNewsArticle.length === 0) setNotFoundSign(true);
      else setNotFoundSign(false);
  }, [reorderWithSearch]);

  //   if (filterNewsArticle.length === 0) setNotFoundSign(true);
  //   else setNotFoundSign(false);

  return (
    <div className="news-app">
      <Title titleName={"News App"} />
      <SearchBar
        reorderWithSearch={reorderWithSearch}
        filterNewsArticle={filterNewsArticle}
        setIsSearched={setIsSearched}
      />
      <div className="tabs-container">
        {articleCategory.map((tab, index) => (
          <TabButton
            tabName={tab.tabName}
            activeTabCategory={tab.categoryName}
            newsCategory={newsCategory}
            inputNewsCategory={inputNewsCategory}
            newsArticle={newsArticle}
            setNotFoundSign={setNotFoundSign}
            setIsSearched={setIsSearched}
            key={index}
          />
        ))}
      </div>

      <Article
        newsArticle={
          filterNewsArticle.length === 0 ? newsArticle : filterNewsArticle
        }
        notFoundSign={notFoundSign}
        filterNewsArticle={filterNewsArticle}
      />
      <div
        className={
          notFoundSign === true ? "active-searched" : "non-active-searched"
        }
      >
        検索結果はありません。
      </div>
    </div>
  );
};
