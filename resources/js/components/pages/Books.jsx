import React from 'react'
import BookCard from '../book/BookCard'
import Search_bar from '../Search_bar'

function Books({ data }) {

    
    const data_JSON = JSON.parse(data)
    const books = data_JSON.books
    const search = data_JSON.search

    return (
        <>
            <Search_bar seach_value={search} />

            <div id='books_container'>
                {search ? (
                    <h1 className='text-3xl text-gray-500'><span className='text-4xl font-bold text-secundary'>A procurar por:</span> {search} </h1>
                ) : (
                    <h1 className='text-4xl'>Livros</h1>
                )}

                {books.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>

        </>
    )
}

export default Books