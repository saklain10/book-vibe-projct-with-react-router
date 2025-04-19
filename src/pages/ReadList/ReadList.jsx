import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Uitilities/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState([])

    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        // console.log(ConvertedStoredBooks)
        // console.log(storedBookData)
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    const handleSort = (type) => {
        setSort(type)

        if(type ==="Pages"){
            const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortedByPage)
        }
        if(type==="Ratings"){
            const sortedByRating = [...readList].sort((a,b)=>b.rating-a.rating)
            setReadList(sortedByRating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn mt-3 mx-1 bg-green-600 text-white py-1 px-2">Sort by {sort? sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs className="m-2">
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl font-semibold mb-4">Book I Read ({readList.length})</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-5">
                        {
                            readList.map(b => (
                                <Book key={b.bookId} singleBook={b} />
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>My WishList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;