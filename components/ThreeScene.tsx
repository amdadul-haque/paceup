"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Model = () => {
  const { scene } = useGLTF("/model.glb");
  return <primitive object={scene} />;
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 10, 0] }}
      style={{ height: "100vh", backgroundColor: "#effd80" }}
    >
      <ambientLight intensity={0.5} />
      <Suspense>
        <Model />
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          {/* <planeBufferGeometry args={[100, 100]} /> */}
          <meshStandardMaterial color="#effd80" />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
