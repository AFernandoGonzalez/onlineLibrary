// src/components/FavoriteButton.js

import React from 'react';
import axios from 'axios';

const FavoriteButton = ({ bookId, isFavorite, onToggleFavorite }) => {
    const handleToggleFavorite = async () => {
        try {
            if (isFavorite) {
                await axios.delete(`/api/books/${bookId}/favorite`); // Replace with your API endpoint
            } else {
                await axios.post(`/api/books/${bookId}/favorite`); // Replace with your API endpoint
            }
            onToggleFavorite(); // Update the state in the parent component
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return (
        <button onClick={handleToggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;
