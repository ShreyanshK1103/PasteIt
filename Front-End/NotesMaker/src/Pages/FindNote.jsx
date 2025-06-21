import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const FindNote = () => {

    const [findId, setFindId] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFindId(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(link.data);
            navigate(`/FindNote/${findId}`);

        } catch (err) {
            console.error('Note not found:', err);
            alert("Note not found. Please check the ID.");
        }
    }
    return (
        <div>
            <div><Navbar /></div>
            <div className='h-[83vh]'>

                <p className='m-20 font-bold text-wrap text-center text-[36px] font-heading'>Enter the Note You want to Read. </p>
                <div className='mt-12 flex flex-col justify-center w-full max-w-md mx-auto mt-6'>
                    <form onSubmit = {onSubmit}>

                        <label htmlFor="paste" className="font-heading block mb-4 text-sm font-medium text-sectext">
                            Enter the ID here....
                        </label>
                        <div className='flex flex-row'>

                            <input value = {findId} type='text' onChange={handleChange} className='font-heading w-full px-4 py-2 rounded-xl border border-divider bg-pastebox text-primtext placeholder-sectext shadow-sm focus:outline-none focus:ring-2 focus:ring-primbutt transition duration-200' placeholder='Enter the Text Here...' />
                            <div className='m-2 '>
                                <button type = "submit" className="cursor-pointer transition-all bg-primbutt text-white px-4 py-2 rounded-sm hover:butthover hover:-translate-y-[1px]">
                                    Find
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
