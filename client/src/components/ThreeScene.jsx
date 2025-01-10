import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Stars from "../three/Stars"; // Updated path
import Globe from "../three/Globe"; // Updated path
import Asteroids from "../three/Asteroids"; // Updated path

const ThreeScene = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Html center>Loading...</Html>}>
                    <Stars />
                    <Globe />
                    <Asteroids />
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
