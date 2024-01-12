import React, { useState } from 'react';
import BookSearch from './BookSearch';
import TrendingBooks from './TrendingBooks';

const BookList = () => {

    const [showTrending, setShowTrending] = useState(true);

    return (
        <div>
            <BookSearch onSearch={() => setShowTrending(false)} />
            {showTrending &&
                <div>
                    <h2>Book List</h2>
                    <TrendingBooks />
                </div>
            }
        </div>
    );
};

export default BookList;
