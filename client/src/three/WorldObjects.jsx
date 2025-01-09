import React, { useState } from 'react';
import { useThree } from '@react-three/fiber';

const WorldObjects = () => {
    const [objects, setObjects] = useState([]);
    const { viewport } = useThree();

    const addObject = () => {
        const newObject = {
            id: Date.now(),
            position: [Math.random() * viewport.width - 5, 0, Math.random() * viewport.height - 5],
        };
        setObjects([...objects, newObject]);
    };

    return (
        <>
            {objects.map((obj) => (
                <mesh
                    key={obj.id}
                    position={obj.position}
                    onClick={() => alert('Object clicked!')}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            ))}
            <button
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    padding: '10px',
                    background: 'teal',
                    color: 'white',
                    borderRadius: '5px',
                }}
                onClick={addObject}
            >
                Add Object
            </button>
        </>
    );
};

export default WorldObjects;
