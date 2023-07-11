import React from 'react'
import CryptoJS from 'crypto-js';
import BookCard from '../book/BookCard'
import Search_bar from '../Search_bar'

function Books({ data }) {
    const decryptData = (encryptedData) => {
        const key = 'Je'; // A chave deve ser a mesma utilizada na criptografia em PHP

        // Decodifica a string criptografada de Base64
        const rawData = CryptoJS.enc.Base64.parse(encryptedData);
        const ciphertext = CryptoJS.lib.CipherParams.create({
            ciphertext: rawData
        });

        // Configura a chave e o vetor de inicialização
        const iv = CryptoJS.enc.Hex.parse(key.substr(0, 32));
        const decrypted = CryptoJS.AES.decrypt(ciphertext, iv, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        // Obtém a string descriptografada
        const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

        return decryptedString;
    };

    // Descriptografa a variável data recebida nas props
    const decryptedData = decryptData(data);

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