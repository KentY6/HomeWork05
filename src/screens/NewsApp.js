import React from "react";
import { Article } from "../components/Article";
import { Navigation } from "../components/Navigation";
import { SearchBar } from "../components/SearchBar";
import { Title } from "../components/Title";

export const NewsApp = () => {
  return (
    <div className="news-app">
      <Title TitleName={"News App"} />
      <SearchBar />
      <div className="navigation-container">
        <Navigation TagName={"ビジネス"} />
        <Navigation TagName={"エンターテイメント"} />
        <Navigation TagName={"一般"} />
        <Navigation TagName={"健康"} />
        <Navigation TagName={"科学"} />
      </div>

      <Article />
    </div>
  );
};
