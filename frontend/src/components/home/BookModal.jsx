import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiInfoCircle, BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

const BookModal = ({ book, onClose }) => {
  console.log("Book data:", book); // Check book data

  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute top-2 right-2 text-2xl text-gray-500 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear || "No Publish Year Available"}
        </h2>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>
            {book.title || "No Title Available"}
          </h2>
        </div>

        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>
            {book.author || "No Author Available"}
          </h2>
        </div>

        <p className='mt-4'>
          Anything You Want to Show!!!
        </p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic veniam aut tenetur amet.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
