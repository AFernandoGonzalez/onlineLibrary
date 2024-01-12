import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BookListResults from './BookListResults';

const BookSearch = ({ onSearch }) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?title=${query}&limit=2`);
            setSearchResults(response.data.docs);
            onSearch();
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    return (
        <div>
            <h2>Book Search</h2>
            <SearchForm onSearch={handleSearch} />
            {searchResults.length > 0 ? (
                <BookListResults books={searchResults} />
            ) : (
                <p>No results</p>
            )
            }
        </div>
    );
};

export default BookSearch;
