import {Link} from 'react-router-dom'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'

const BooksTable = ({books}) => {
  return (
    <div>
        <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
              <th className='border border-slate-600 '>No</th>
                <th className='border border-slate-600'>Title</th>
                <th className='border border-slate-600 max-md:hidden'>Author</th>
                <th className='border border-slate-600 max-md:hidden'>Publisher Year</th>
                <th className='border border-slate-600 max-md:hidden'>Operations</th>
                

              </tr>

            </thead>
            <tbody>
              {
                books.map((book, index) => (
                  <tr key={book.id} className='h-8'>
                    <td className='border border-slate-600 rounded-md text-center'>{index + 1}</td>
                    <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
                    <td className='border border-slate-600 rounded-md text-center'>{book.author}</td>
                    <td className='border border-slate-600 rounded-md text-center'>{book.publishYear}</td>
                    <td className='border border-slate-600 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800'/>
                        </Link>

                        <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600'/>
                        </Link>
                        
                        <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600'/>
                        </Link>
                        

                      </div>
                    </td>

                  </tr>
                ))}

            </tbody>
          </table>
      
    </div>
  )
}

export default BooksTable
