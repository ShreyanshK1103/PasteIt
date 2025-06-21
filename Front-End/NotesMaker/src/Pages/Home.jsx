import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { BodyHome } from '../Components/BodyHome';

export const Home = () => {
    return (
        <div>
            <div className = 'sticky'><Navbar /></div>
            <div><BodyHome /></div>
            <div><Footer /></div>
        </div>
    )
}
