import React,{useEffect,useState} from 'react';
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack'


const ShowBook = () => {
  console.log("Test result 0");
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=>{
    console.log("Test result 1");
    setLoading(true)
    axios
    .get(`http://localhost:5555/books/${id}`)
    
    .then(response => {
      console.log("Test result 2");
      
      setBook(response.data.book);
      console.log("Test result 3");
      console.log("Response 1 is",response.data);
      console.log("Response 2 is",response.data.book.author);
      setLoading(false);
      })
      .catch(error => {
        console.log("Test result 4");
        console.error(error);
        setLoading(false);
      })

  },[])
  return (
    
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? <Spinner /> : (


<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Id</span>
  <span >{book._id || "N/A"}</span>
</div>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Title</span>
  <span >{book.title || "N/A"}</span>
</div>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Author</span>
  <span >{book.author || "N/A"}</span>
</div>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
  <span >{book.publishYear || "N/A"}</span>
</div>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Create Time</span>
  <span >{book.createdAt ? new Date(book.createdAt).toString() : "N/A"}</span>
</div>

  </div>
   )}
    </div>
  )
}

export default ShowBook
