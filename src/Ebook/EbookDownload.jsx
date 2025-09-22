import React from 'react'
import { BookEBooks } from '../Data/Book&Ebook'
import { Link, useLocation } from 'react-router-dom'

const EbookDownload = () => {
  const pathname = useLocation();
  const url = pathname.pathname.split("/").filter(Boolean)
  const path = url[1].slice(-2)
  const filterBooks = BookEBooks.filter((val) => val.id === path) 
  const bookName = url[1];
  const bookUrl = bookName.replace(/-\d+$/, "")
  

  const handleDownload = async () => {
    try {
      const response = await fetch(`/pdf/${bookUrl}.pdf`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error('Empty blob—check file path or server');
      }

      const url = URL.createObjectURL(blob);      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${bookUrl}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  return (
    <div className='w-[100%] min-h-[100%] flex flex-col justify-center items-center'>
      <h1 className='font-[Righteous] font-bold text-[40px] text-theme email-margin-top margin-bottom-1'>Books & Ebooks.</h1>
      <hr className='w-[60%] text-white margin-2' />
      <div className=" w-[50%] min-h-[500px] grid grid-cols-1">
        {filterBooks.map((book) => (
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-center margin-2">
            <div className="w-[80%] h-[100%] flex flex-col justify-center items-center">
              <h2 className='font-[Righteous] font-bold text-[25px] text-theme margin-bottom-1 books-title'>{book.name}</h2>
              <div className="w-[100%] flex flex-col justify-center items-center">
                <img className='w-[210px] h-[280px] object-fill rounded-[20px]  margin-1' src={book.image} alt="" />
                <div className="w-[60%] flex flex-col justify-center items-start">
                  <p className='font-[Righteous] font-bold text-white text-[16px] margin-0'>Name: {book.name}</p>
                  <p className='font-[Righteous] font-bold text-white text-[16px] margin-0'>Category: {book.Category}</p>
                  <a onClick={handleDownload} className='w-[100%] h-[40px] flex justify-center items-center font-[Righteous] font-bold bg-theme text-white text-[16px] rounded-[10px] border-none margin-bottom-1 cursor-pointer'>{book.button_val}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EbookDownload