import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BookListResults from './BookListResults';
import Loading from './Loading';

const BookSearch = ({ onSearch }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        try {
            setLoading(true); // Set loading to true before making the API request

            const response = await axios.get(`https://openlibrary.org/search.json?title=${query}&limit=2`);
            setSearchResults(response.data.docs);
            onSearch();
        } catch (error) {
            console.error('Error searching books:', error);
        } finally {
            setLoading(false); // Set loading to false after the request is completed
        }
    };

    return (
        <div>
            <h2>Book Search</h2>
            <SearchForm onSearch={handleSearch} />
            {loading && <Loading />} {/* Display loading component if loading is true */}

            {searchResults.length > 0 ? 
                <>
                    <p>Found {searchResults.length} results</p>
                    <BookListResults books={searchResults} />
                </> : ""
            }
        </div>
    );
};

export default BookSearch;
