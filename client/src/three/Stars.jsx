import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Stars = () => {
    const starsRef = useRef();

    const stars = useMemo(() => {
        const starArray = [];
        for (let i = 0; i < 100; i++) {
            starArray.push([
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
            ]);
        }
        return starArray;
    }, []);

    useFrame(({ clock }) => {
        if (starsRef.current) {
            const elapsedTime = clock.getElapsedTime();
            starsRef.current.children.forEach((star, index) => {
                const scale = Math.sin(elapsedTime + index * 0.1) * 0.5 + 0.5;
                star.scale.set(scale, scale, scale);
            });
        }
    });

    return (
        <group ref={starsRef}>
            {stars.map((position, index) => (
                <mesh key={index} position={position}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            ))}
        </group>
    );
};

export default Stars;




