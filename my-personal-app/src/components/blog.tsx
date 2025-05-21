import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    url: string;
    title: string;
    description: string;
}

const NewsFeed: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchNews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/news');
            const fetchedArticles: Article[] = response.data.articles;

            if (Array.isArray(fetchedArticles)) {
                setArticles(fetchedArticles);
            } else {
                setArticles([]);
                console.error('Expected an array but got:', fetchedArticles);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (error) {
        return <div className="text-red-500">Error fetching news: {error}</div>;
    }

    return (
        <div className="container">
            <h2 className="header">Latest News</h2>
            <div className="grid">
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <div key={article.url} className="article">
                            <h3 className="title">{article.title}</h3>
                            <p className="description">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
                        </div>
                    ))
                ) : (
                    <p>No news articles available.</p>
                )}
            </div>

            <style >{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem;
                }
                .header {
                    text-align: center;
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .article {
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 1rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.2s;
                }
                .article:hover {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                .title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
                .description {
                    color: #4a5568;
                    margin-bottom: 1rem;
                }
                .read-more {
                    color: #3182ce;
                    text-decoration: none;
                }
                .read-more:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default NewsFeed;