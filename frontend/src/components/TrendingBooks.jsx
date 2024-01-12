// src/components/TrendingBooks.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookListResults from './BookListResults';
import Loading from './Loading';

const TrendingBooks = () => {
    const [trendingBooks, setTrendingBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingBooks = async () => {
            try {
                const response = await axios.get('https://openlibrary.org/trending/daily.json?limit=5');
                setTrendingBooks(response.data.works);
            } catch (error) {
                console.error('Error fetching trending books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingBooks();
    }, []);

    return (
        <div>
            <h2>Trending Books</h2>
            {loading ?
                <Loading /> :
                <BookListResults books={trendingBooks} />
            }
        </div>
    );
};

export default TrendingBooks;
