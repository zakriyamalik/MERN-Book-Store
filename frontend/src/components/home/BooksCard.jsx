import React from 'react'
import {PiBookOpenTextLight } from 'react-icons/pi'
import {BiInfoCircle, BiUserCircle} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { MdOutlineDelete } from 'react-icons/md'




const BooksCard = ({books}) => {
    console.log("Books :",books);
    

return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {books && books.length > 0 ? (
        books.map((item, index) => (
          <div key={index} className="border-2 bg-white rounded-lg shadow-md p-4 m-4 relative hover:shadow-lg">
            
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
              {item.publishYear ? item.publishYear : "No Publish Year Available"}
            </h2>
            <h4 className='my-2 text-gray-500'>
              {item._id ? `ID: ${item._id}` : "No ID Available"}
            </h4>
            
  
            <div className='flex justify-start items-center gap-x-2'>
              <PiBookOpenTextLight className='text-red-300 text-2xl'/>
              <h2 className='my-1'>
                {item.title ? item.title : "No Title Available"}
              </h2>
            </div>
  
            <div className='flex justify-start items-center gap-x-2'>
              <BiUserCircle className='text-red-300 text-2xl'/>
              <h2 className='my-1'>
                {item.author ? item.author : "No Author Available"}
              </h2>
            </div>
  
            <div className='flex justify-between items-center gap-x-2'>
              <Link to={`/books/details/${item._id}`}>
                <BiInfoCircle className='text-2xl text-green-800 hover:text-black'/>
              </Link>
  
              <Link to={`/books/edit/${item._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black'/>
              </Link>
  
              <Link to={`/books/delete/${item._id}`}>
                <MdOutlineDelete className='text-2xl text-red-800 hover:text-black'/>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-xl text-gray-500">
          No books available.
        </div>
      )}
    </div>
  );
  
}

export default BooksCard
