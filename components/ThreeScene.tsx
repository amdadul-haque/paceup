"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CursorLight from "./CursorLight"; // We'll create this component next
import { PaceUp } from "./PaceUp"; // Adjust the import path as necessary

const ThreeScene: React.FC = () => {
  return (
    <Canvas
      shadows // Enable shadow rendering
      camera={{ position: [0, 2, 5], fov: 35 }}
      style={{ height: "100vh", backgroundColor: "#f9d4e3" }} // Light pink background
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Cursor-Based Point Light */}
      <CursorLight />

      {/* Ground Plane to Receive Shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <PaceUp />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
