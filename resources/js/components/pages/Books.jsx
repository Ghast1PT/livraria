import React, { useEffect, useState } from 'react'
import BookCard from '../book/BookCard'
import Search_bar from '../Search_bar'
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const searchParam = urlParams.get('search');
                setSearchValue(searchParam)

                if (searchParam != undefined) {
                    const response = await axios.get('/livros?search=' + searchParam);
                    setBooks(response.data.books);
                } else {
                    const response = await axios.get('/livros');
                    setBooks(response.data.books);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Search_bar seach_value={searchValue} />
            <div id='books_container'>
                {searchValue ? (
                    <h1 className='text-3xl text-gray-500'><span className='text-4xl font-bold text-secundary'>A procurar por:</span> {searchValue} </h1>
                ) : (
                    <h1 className='text-4xl'>Livros</h1>
                )}
                <div id='books_cards' className='flex gap-4 mt-5' >
                    {books.map((book) => (
                        <BookCard book={book} key={book.id} className='col-span-1' />
                    ))}
                </div>

            </div>

        </>
    )







}

export default Books