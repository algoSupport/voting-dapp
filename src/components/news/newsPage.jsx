import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./newsItem";
import { Row,Col } from 'antd';
export default function NewsList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=68153724f38c408f99fb6b9215cb0941')
      .then((response) => {
        try {
          setData(response.data);
          console.log(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      });
  }, []);

  if (loading) return <h1 className="mt-5 pt-5 text-center">loading</h1>;

  if (error) return <h1 className="mt-5 pt-5 text-center">Can't Fetch data</h1>;

  return (
    <>
      
      <div className="container-fluid p-5  pt-5">
        <h1 style={{marginBottom:"50px"}}>Latest News</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {data.articles.map(({urlToImage,description,title}) => (
              <Col key={title} gutter={16} span={8}>
                  <NewsItem  urlToImage={urlToImage} description={description} title={title} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}