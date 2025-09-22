import React, { useEffect } from 'react'
import { BookEBooks } from '../Data/Book&Ebook'
import { Link, useLocation } from 'react-router-dom'

const Ebook = () => {
  const pathname = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])

  return (
    <div className='w-[100%] min-h-[100%] flex flex-col justify-center items-center'>
      <h1 className='font-[Righteous] font-bold text-[40px] text-theme email-margin-top margin-bottom-1'>Books & Ebooks.</h1>
      <hr className='w-[60%] text-white margin-2' />
      <div className=" w-[80%] min-h-[800px] grid grid-cols-2 book-container">
        {BookEBooks.map((book) => (
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-center margin-2">
            <div className="w-[80%] h-[100%] flex flex-col justify-center items-center">
              <h2 className='font-[Righteous] font-bold text-[25px] text-theme margin-bottom-1 books-title'>{book.name}</h2>
              <div className="w-[100%] flex flex-col justify-center items-center">
                <img className='w-[210px] h-[280px] object-fill rounded-[20px] border border-theme margin-1' src={book.image} alt="" />
                <div className="w-[60%] flex flex-col justify-center items-start">
                  <p className='font-[Righteous] font-bold text-white text-[16px] margin-0'>Name: {book.name}</p>
                  <p className='font-[Righteous] font-bold text-white text-[16px] margin-0'>Category: {book.Category}</p>
                  <Link to={book.Link} className='w-[100%] h-[40px] flex justify-center items-center font-[Righteous] font-bold bg-theme text-white text-[16px] rounded-[10px] border-none margin-bottom-1'>{book.button_val}</Link>
                </div>
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Ebook