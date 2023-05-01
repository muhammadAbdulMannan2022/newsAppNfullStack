import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const catagoryNews = useLoaderData();
  console.log(catagoryNews);
  return (
    <div>
      {catagoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
