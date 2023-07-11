import React, { useState } from 'react'
import BookCard from '../book/BookCard'
import Search_bar from '../Search_bar'

function Books({ data }) {

    const data_JSON = JSON.parse(data)
    const books = data_JSON.books
    const search = data_JSON.search
 
    return (
        <>
            <Search_bar seach_value={search}/>

            <div id='books_container'>

                {books.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </>
    )
}

export default Books