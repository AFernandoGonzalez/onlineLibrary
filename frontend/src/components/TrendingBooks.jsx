// src/components/TrendingBooks.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookListResults from './BookListResults';

const TrendingBooks = () => {
    const [trendingBooks, setTrendingBooks] = useState([]);

    useEffect(() => {
        const fetchTrendingBooks = async () => {
            try {
                const response = await axios.get('https://openlibrary.org/trending/daily.json?limit=5');
                setTrendingBooks(response.data.works);
            } catch (error) {
                console.error('Error fetching trending books:', error);
            }
        };

        fetchTrendingBooks();
    }, []);

    return (
        <div>
            <h2>Trending Books</h2>
            <BookListResults books={trendingBooks} />
        </div>
    );
};

export default TrendingBooks;
