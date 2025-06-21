import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Background from './Background';

export const ShowNotes = () => {

    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get(`http://localhost:7000/api/v1/notes/FindNotes/${id}`);
                setNote(res.data.data.note);
            } catch (err) {
                console.error('This is an error');
            }
        };
        fetchNote();
    }, [id]);

    return (
        <div className = 'bg-background relative overflow-hidden'>
            <Background className = 'z-[-1]'/>
            <div><Navbar /></div>
            <p className = 'text-[48px] font-bold font-heading flex justify-center mt-5'>Paste It</p>
            <div className = 'flex items-center justify-center m-5 h-[90vh]'>{note ? (
                <p className="p-4 font-main rounded-sm border border-gray-400 bg-white text-center text-lg text-gray-800 max-w-xl">
                    {note.text}
                </p>
            ) : (
                <p className="text-red-500">Note not found or could not be loaded.</p>
            )}</div>
            <div><Footer /></div>
        </div>
    )
}
