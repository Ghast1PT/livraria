import React from 'react'

function BookCard({ book }) {
  return (

    <div className="max-w-sm p-6 bg-primary border border-secundary rounded-lg shadow lg:w-56 lg:h-52 text-center">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-secundary">{book.title}</h5>
      </a>
      <p className="mb-3  text-third font-bold">{book.author}</p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-5 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:bg-third focus:text-secundary focus:font-bold">
        Saiba mais
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>

  )
}

export default BookCard