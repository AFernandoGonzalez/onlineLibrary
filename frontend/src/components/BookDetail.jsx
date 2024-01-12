// src/components/BookDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const { id } = useParams(); // Access the id parameter from the route
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [id]);

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Book Details</h2>
            <p>Title: {book.title}</p>
            <p>Author: {book.author_name && book.author_name.join(', ')}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
            <p>Number of Pages: {book.number_of_pages}</p>
            <p>description: {book.description}</p>
        </div>
    );
};

export default BookDetail;
