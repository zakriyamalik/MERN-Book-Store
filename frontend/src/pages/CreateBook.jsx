import React ,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBook = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      title:title,
      author:author,
      publishYear:publishYear
    };
    setLoading(true);
    axios.post('http://localhost:5555/books',data)
    .then((res)=>{
      setLoading(false);
      navigate('/');
      })
      .catch((err)=>{
        setLoading(false);
        console.log(err);
      })
    }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold mb-4'>Create Book</h1>
      {
        loading?<Spinner />:
        ''
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>


        <div className='my-4'>
          <label className='block text-lg font-bold mb-2'>Title:</label>
          <input type="text"
           value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full p-2 border-2 border-gray-400 rounded-md' />
        </div>

        <div className='my-4'>
          <label className='block text-lg font-bold mb-2'>Author:</label>
          <input type="text"
           value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className='w-full p-2 border-2 border-gray-400 rounded-md' />
          
        </div>


        <div className='my-4'>
          <label className='block text-lg font-bold mb-2'>Publish Year:</label>
          <input type="text"
           value={publishYear}
            onChange={(e)=>setPublishYear(e.target.value)}
            className='w-full p-2 border-2 border-gray-400 rounded-md' />
          
        </div>
        

      </div>

      <button className='p-2 bg-sky-300 m-8 ' onClick={handleSubmit}>
      Save
      </button>
    </div>
  )
}

export default CreateBook
