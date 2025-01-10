import React from 'react';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
            <header className="absolute top-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to EchoVerse</h1>
                <p className="text-lg">Explore your universe in a new dimension</p>
            </header>
            <div className="w-full h-[80vh]">
                <ThreeScene />
            </div>
            <footer className="absolute bottom-10 text-center">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg">
                    Get Started
                </button>
            </footer>
        </div>
    );
};

export default Home;



