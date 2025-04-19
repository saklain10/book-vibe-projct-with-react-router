import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    // <Link to={}>
    // </Link>
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
               <Banner></Banner>
               <Books data = {data}></Books>
        </div>
    );
};

export default Home;