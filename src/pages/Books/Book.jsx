import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


// const Book = ({bookPromise}) => {
//     const data = use(bookPromise)
//     console.log(data)

const Book = ({ singleBook }) => {
    console.log(singleBook)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    return (

        <Link to={`/bookDetails/${bookId}`}>
            <div className="card w-auto h-112 p-6 border transition-all duration-500 ease-in-out transform
  bg-white text-black dark:bg-gray-900 dark:text-white hover:text-black 
  hover:scale-[1.01] hover:-translate-y-2 hover:rotate-[0.3deg]
  hover:bg-gradient-to-br hover:from-yellow-100 hover:to-green-500
  hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)]
  dark:hover:shadow-[0_10px_60px_rgba(255,255,255,0.6)]
  hover:ring-2 hover:ring-amber-300 hover:ring-offset-2 hover:ring-offset-white
  dark:hover:ring-2 dark:hover:ring-yellow-300 dark:hover:ring-offset-gray-900">


                <figure className='p-4 py-8 bg-gray-100 w-2/3 mx-auto rounded'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map(tag => <button className='border rounded p-1'>{tag}</button>)
                        }
                    </div>

                    <div className=''>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">{totalPages}</div>
                        </h2>
                        <p>Book by - {publisher}</p>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className="divider"></div>
                    </div>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfAlt />

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;