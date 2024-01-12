import React from 'react';
import BookItem from './BookItem';

const BookListResults = ({ books }) => (
    <ul>
        {books?.map((book) => (
            <BookItem key={book.key} book={book} />
        ))}
    </ul>
);

export default BookListResults;
