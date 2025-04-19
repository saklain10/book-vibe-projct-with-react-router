import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';


const Books = ({data}) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllBooks(data);
  //     });
  // }, []);

const bookPromise = fetch('/booksData.json').then(res => res.json())

  return (
    <div>
      <Suspense fallback={<span>Loading.....</span>}>
      {/* <Book bookPromise={bookPromise}></Book> */}
      {/* <Book data = {data}></Book> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-center text-center items-center'>
      {
        data.map((singleBook)=> <Book  singleBook={singleBook} key={singleBook.bookId}></Book>)
        
      }
      </div>
      </Suspense>
    </div>
  );
};

export default Books;
