import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../Uitilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    // console.log(id)
    const data = useLoaderData();
    // console.log(data)
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    const handleMarkAsRead = id => {
        toast("Wow so easy!");
        //store with id
        //where to store
        //keep as array or collection
        //
        //if book already exist then show a alert
        //if book not exist then push in the collection or array
        MySwal.fire({
            title: "Good job!",
            text: "Book Added to Mark as Read",
            icon: "success"
          });
        addToStoredDB(id)

    }



    return (
        <div className='grid grid-cols-2 gap-10 m-5'>
            <div className='bg-gray-300 p-5 flex text-center justify-center items-center'>
                <img className='w-48' src={image} />
            </div>
            <div>
                <h1 className='text-5xl font-bold pb-2'>{bookName}</h1>
                <h4 className='pb-3'>By-{author}</h4>
                <div className="divider m-0"></div>
                <h4 className=''>{category}</h4>
                <div className="divider m-1"></div>
                <h4 className='pb-3'><span className='font-bold'>Review-</span>{review}</h4>
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
                <button className="btn btn-info m-2">Add to Whishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;