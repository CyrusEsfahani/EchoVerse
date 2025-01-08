import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-2xl font-bold">EchoVerse</h1>
        <div>
            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" to="/explore">Explore</Link>
            <Link className="px-4" to="/profile">Profile</Link>
            <Link className="px-4" to="/avatar-creation">Create Avatar</Link>
        </div>
    </nav>
);

export default Navbar;
