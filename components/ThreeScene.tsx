"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CursorLight from "./CursorLight";
import { PaceUp } from "./PaceUp"; // Adjust the import path as necessary

const ThreeScene: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [5, 5, 5], fov: 90 }}
        style={{ height: "100vh", backgroundColor: "#f9d4e3" }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.8} />

        {/* Cursor-Based Point Light */}
        <CursorLight />

        {/* Ground Plane to Receive Shadows */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[1000, 1000]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        {/* 3D Model */}
        <Suspense fallback={null}>
          <PaceUp />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
