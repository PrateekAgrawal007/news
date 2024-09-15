import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import notFoundImage from "../asset/notfound.png"; //import fallback image
import "../FetchData.css"; // Create this CSS file for additional styles

const FetchData = ({ cat }) => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=b450e1f31c194c52b6ea9bfe87c6a763`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=b450e1f31c194c52b6ea9bfe87c6a763"
      );
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4" style={{ minHeight: "100vh" }}>
      <h3 className="text-center mb-4 top-headlines-header">
        <u>Top Headlines</u>
      </h3>

      <div className="row">
        {Data ? (
          Data.map((items, index) => (
            <div className="col-md-4 my-3" key={index}>
              <div
                className="card"
                style={{
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                  height: "100%", // Ensure all cards take full height
                }}
              >
                <img
                  src={items.urlToImage || notFoundImage}
                  alt="Not Found"
                  className="card-img-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = notFoundImage;
                  }}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="card-body"
                  style={{ height: "250px", overflow: "hidden" }}
                >
                  <h5
                    className="card-title"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    {items.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontSize: "0.9rem", color: "#666" }}
                  >
                    {items.description?.length > 100
                      ? `${items.description.substring(0, 100)}...`
                      : items.description}
                  </p>
                  <Link
                    to={items.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>

      {/* ---------------------------------- */}
    </div>
  );
};

export default FetchData;
