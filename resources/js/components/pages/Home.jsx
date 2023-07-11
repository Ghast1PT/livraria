import React from 'react'

function Home() {
  return (
    <div className="bg-search w-full text-center bg-cover m-14 font-bold" >

      <div className="bg-black/50 h-full pt-52">
        <h1 className='text-black text-4xl mb-5 align-middle bg-white mx-80 rounded'>Procure um evento</h1>

          <input type="text" name="search" id="search" className="w-1/2 h-10 rounded-md pl-5" placeholder="Procurar..." />
          
      </div>

    </div>
  )
}

export default Home