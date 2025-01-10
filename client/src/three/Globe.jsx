import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


const Globe = () => {
    const globeRef = useRef();

    // Load texture with error handling
    let earthTexture;
    try {
        earthTexture = useLoader(TextureLoader, ["/textures/earthmap.jpg"]);
    } catch (error) {
        console.error("Failed to load texture:", error);
    }

    useFrame(() => {
        if (globeRef.current) globeRef.current.rotation.y += 0.002;
    });

    return (
        <mesh ref={globeRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial map={earthTexture || null} />
        </mesh>
    );
};

export default Globe;









