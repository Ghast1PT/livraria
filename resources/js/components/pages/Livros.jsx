import React from 'react'
import BookCard from '../book/BookCard'

function Livros({ books }) {

    const books2 = JSON.parse(books)

    return (
        <>
            {books2.map((book) => (
                <BookCard book={book} />
            ))}
        </>
    )
}

export default Livros