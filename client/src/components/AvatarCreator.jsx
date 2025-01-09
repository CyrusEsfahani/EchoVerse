import React, { useState } from 'react';

const AvatarCreator = () => {
    const [name, setName] = useState('');
    const [traits, setTraits] = useState([]);
    const [currentTrait, setCurrentTrait] = useState('');

    const addTrait = () => {
        if (currentTrait && !traits.includes(currentTrait)) {
            setTraits([...traits, currentTrait]);
            setCurrentTrait('');
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">Create Your Avatar</h2>
            <input
                type="text"
                placeholder="Avatar Name"
                className="border p-2 mt-4 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Add Trait"
                    className="border p-2"
                    value={currentTrait}
                    onChange={(e) => setCurrentTrait(e.target.value)}
                />
                <button onClick={addTrait} className="ml-4 bg-blue-500 text-white p-2 rounded">
                    Add Trait
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-xl">Traits:</h3>
                <ul>
                    {traits.map((trait, idx) => (
                        <li key={idx} className="mt-2">{trait}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AvatarCreator;
