import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

const Asteroids = () => {
    const [asteroids, setAsteroids] = useState([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newAsteroid = {
                id: Date.now(),
                position: [
                    Math.random() * 20 - 10,
                    Math.random() * 10 - 5,
                    -20,
                ],
                speed: Math.random() * 0.2 + 0.1,
            };
            setAsteroids((prev) => [...prev, newAsteroid]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useFrame(() => {
        setAsteroids((prev) =>
            prev
                .map((asteroid) => ({
                    ...asteroid,
                    position: [
                        asteroid.position[0],
                        asteroid.position[1],
                        asteroid.position[2] + asteroid.speed,
                    ],
                }))
                .filter((asteroid) => asteroid.position[2] < 20)
        );
    });

    return (
        <>
            {asteroids.map((asteroid) => (
                <mesh key={asteroid.id} position={asteroid.position}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
            ))}
        </>
    );
};

export default Asteroids;



