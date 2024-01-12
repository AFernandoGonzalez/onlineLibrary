import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => (
    <li key={book.key}>
        <Link to={`/books/${encodeURIComponent(book.key)}`}>
            <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover for ${book.title}`}
                style={{ width: '50px', height: '75px' }}
            />
            <p>{book.title} by {book.author_name && book.author_name.join(', ')}</p>
        </Link>
    </li>
);

export default BookItem;
