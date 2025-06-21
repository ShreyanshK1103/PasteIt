import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Background from './Background';

export const BodyHome = () => {

  const [term, setTerm] = useState('');
  const [result, setResult] = useState(null);
  const [id, setId] = useState(null);

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://pasteit-1-0yix.onrender.com/api/v1/notes', {
        text: term
      });

      setResult(response.data);
      setTerm('');
      const noteId = response.data.data.notes._id;
      setId(noteId);

    }
    catch (err) {
      setResult({ error: 'Something went wrong' });
    }

  }

  return (
    <div className='flex flex-col h-[90vh] relative overflow-hidden px-4 sm:px-6'>
      <Background className = 'z-[-1]'/>
      <div className='z-10 relative mt-10 flex justify-center'>
        <p className='m-5 text-32px sm:text-[40px] md:text-[48px] font-bold font-heading text-primtext'>Paste It</p>
      </div>
      <div className='z-10 relative flex flex-col justify-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-6'>
        <form onSubmit={handleFormSubmit}>

          <label htmlFor="paste" className="font-heading block mb-4 text-sm font-medium text-sectext">
            Paste something here....
          </label>
          <div className='flex flex-row'>

            <input value={term} type='text' onChange={handleChange} className='font-heading w-full px-4 py-2 rounded-xl border border-divider bg-pastebox text-primtext placeholder-sectext shadow-sm focus:outline-none focus:ring-2 focus:ring-primbutt transition duration-200' placeholder='Enter the Text Here...' />
            <div className='m-2 '>
              <button type='submit' className="cursor-pointer transition-all bg-primbutt text-white px-4 py-2 rounded-sm hover:butthover hover:-translate-y-[1px] sm:w-auto">
                Save
              </button>
            </div>
          </div>
          <div>
            {result && (
              <p className={`font-heading font-bold text-sm mt-4 ${result.error ? 'text-red-600' : 'text-emerald-400'}`}>
                {result.error
                  ? result.error
                  : `✅ Note saved: successfully`}
              </p>
            )}
          </div>
          <div>
            {id && (
              <p className="mt-2 font-heading break-all">
                <p className = 'text-primtext font-bold'>This is your link:</p> <Link to={`http://localhost:5173/FindNote/${id}`} className = 'text-sectext'> 
                  http://localhost:5173/FindNote/{id}
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
