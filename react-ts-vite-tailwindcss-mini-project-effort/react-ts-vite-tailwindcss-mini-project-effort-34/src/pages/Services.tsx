import React, { useEffect, useState } from 'react';
import { NewsItem } from '../types/News';
import { fetchNews } from '../api/fetchNews';

const Services = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews()
          .then(data => {
            setNews(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching news:', error);
            setLoading(false);
          });
      }, []);

      if (loading) return <p>Loading...</p>;
  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>News Feed</h1>
      {news.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <small>Source: {item.source}</small>
        </div>
      ))}
    </div>
    </>
  );
}

export default Services;
