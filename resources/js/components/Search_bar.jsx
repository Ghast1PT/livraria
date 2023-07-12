import React, { useState } from 'react'

function Search_bar({ seach_value }) {

  const [search, setSearch] = useState(seach_value)

  function handleChange(e) {
    setSearch(e.value)
  }

  return (
    <div className="bg-search w-full text-center bg-cover m-14 font-bold" >

      <div className="bg-black/50 h-full pt-52">
        <h1 className='text-black text-4xl mb-5 align-middle bg-white mx-80 rounded'>Procure um livro</h1>
        <form action="/livros#books_container" method="GET" >

          <input type="text" name="search" id="search" className="w-1/2 h-10 rounded-md pl-5" placeholder="Procurar..." onChange={handleChange} value={search} />

        </form>
      </div>

    </div>
  )
}

export default Search_bar