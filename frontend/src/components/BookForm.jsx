// src/components/BookForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onFormSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/books', { title, author, category }); // Replace with your API endpoint
            onFormSubmit(response.data);
            setTitle('');
            setAuthor('');
            setCategory('');
        } catch (error) {
            console.error('Error creating a new book:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label>
                Category:
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
