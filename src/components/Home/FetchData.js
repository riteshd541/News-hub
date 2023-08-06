import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [gridView, setGridView] = useState(false); // State variable to track view mode

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=abe84282a0f544b7a9af729f4b2b0c02"
      );
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleView = () => {
    setGridView((prevGridView) => !prevGridView); // Toggle the view mode
  };

  return (
    <div className="container my-4">
      <h3 className="d-flex justify-content-center align-items-center">
        <u>TOP HEADLINES</u>
      </h3>
      <div className="container">
        <div className="d-flex justify-content-end mb-3">
          <button onClick={toggleView}>
            {gridView ? "List View" : "Grid View"}
          </button>
        </div>
        {data.length === 0 ? (
          <p>LOADING...</p>
        ) : (
          <div className={gridView ? "row" : ""}>
            {data.map((item, index) => (
              <div key={index} className={gridView ? "col-md-6" : ""}>
                <div
                  className="container my-3 p-3 d-flex flex-column"
                  style={{ height: "100%", boxShadow: "2px 2px 10px Silver" }}
                >
                  <h5 className="my-1">{item.title}</h5>

                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1 flex-grow-1">{item.content}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchData;
