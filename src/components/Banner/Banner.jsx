import React from 'react';

import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-300 py-20 my-6 rounded-2xl px-10">
  <div className="hero-content flex-col items-center text-center justify-center lg:flex-row-reverse">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl w-56 lg:w-96"
    />
    <div>
      <h1 className="text-5xl font-bold mb-7">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;