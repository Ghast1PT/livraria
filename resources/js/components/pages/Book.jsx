import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Book() {
    const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/livro/${id}`);
                setBook(response.data);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);


    return (
        <div className='mt-40'>
            <div className="grid-cols-2 grid-flow-row grid gap-x-96 mb-24">
                <div className="">
                    <h1 className='text-3xl font-bold'>{book.title}</h1>
                    <h2 className='mt-4 text-lg text-gray-800'>{book.author}</h2>
                </div>
                <div className='text-right'>
                    <a className='bg-third p-4 rounded-lg text-white'>Requisitar</a>
                </div>
            </div>
            <div>
                <p className='text-slate-600'>{book.sinopse}</p>
            </div>
        </div>
    )

}

export default Book