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
        <div>{book.title}</div>
    )
}

export default Book