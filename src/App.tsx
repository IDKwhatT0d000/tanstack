
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import './App.css'
import { useState } from 'react';
import { todos } from './queryOptions/todos';

function App() {
  const [page,setPage]=useState(1);
  const [on,setOn]=useState(true)
  // const {data,refetch,error}=useQuery(todos(page,on));
  const {data,refetch,error}=useSuspenseQuery(todos(page,on)); //here data is alway defined and no type errors

  if(error){
    alert("error in query")
  }
  return (
    <>
      {/* <div className='text-blue-800'>
        {isPending? "pending":  JSON.stringify(data)}
      </div> */}
      <div className='text-blue-800'>
        {data.title}
      </div>
      <button onClick={()=>refetch()}
        className='bg-blue-600 text-black p-2 rounded-2xl'
        >
        Refetch
      </button>
      <button onClick={() => setPage(prev => prev + 1)}
        className='bg-green-600 text-black p-2 rounded-2xl'
        >
        next page
      </button>
      <button onClick={() => setPage(prev => prev - 1)}
        className='bg-green-600 text-black p-2 rounded-2xl'
        >
        previous page
      </button>
    </>
  )
}


export default App

