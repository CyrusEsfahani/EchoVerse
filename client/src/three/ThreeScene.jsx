import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene = () => (
    <Canvas style={{ height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    </Canvas>
);

export default ThreeScene;

