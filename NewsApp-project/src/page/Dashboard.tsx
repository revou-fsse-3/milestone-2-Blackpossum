import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const apiKey = import.meta.env.NEWS_API_KEY
  const token = localStorage.getItem("Token");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 10;

  const [articles, setArticles] = useState([]);

  interface Article {
    title: string;
    author: string;
    publishedAt: string;
    description: string;
    
  }

  interface ApiResponse {
    articles: Article[];
  }

  const fetchingArticles = async () => {
    try {
      const res = await axios.get<ApiResponse>(
        // API LIMIT GABISA REQ LAGI 
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = res.data.articles;
      setArticles(results);

    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchingArticles();
    } else {
      alert("Please log in to your account");
      navigate("/");
    }
  }, [page]);

  return (
    <div>
      <Container>
        {articles?.map((article, index) => (
          <div key={index} className="my-4 p-6 bg-gray-100 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {article.author} - {new Date(article.publishedAt).toDateString()}
            </p>
            <p className="text-gray-800">{article.description}</p>
          </div>
        ))}
        <Pagination
          count={10} //jumlah page
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          className="mt-4 flex justify-center"
        />
      </Container>
    </div>
  );
};

export default Dashboard;
