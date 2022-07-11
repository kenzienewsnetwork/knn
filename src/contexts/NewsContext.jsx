import { createContext, useState } from "react";
import { api } from "../services/api";

export const NewsContext = createContext([]);

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();

  async function getAllNews() {
    try {
      const response = await api.get("/articles");

      setAllNews(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneNewsById() {
    try {
      const response = await api.get(`/articles/1`);

      setArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments() {
    try {
      const response = await api.get(`/articles/1?_embed=comments`);

      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  }

  async function createComment(body, userId, articleId) {
    const resp = {
      ownerId: userId,
      articleId: articleId,
      content: body,
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.post(`/comments`, resp, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewsContext.Provider
      value={{
        getAllNews,
        allNews,
        getOneNewsById,
        article,
        getComments,
        comments,
        createComment,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
