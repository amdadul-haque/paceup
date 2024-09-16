'use client';
import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrthographicCamera, useGLTF } from '@react-three/drei';
import { PlaneBufferGeometry } from 'three';

// Extend Three.js geometries so R3F can use them declaratively
extend({ PlaneBufferGeometry });

const Model = () => {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} />;
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 10, 0] }}
      style={{ height: '100vh', backgroundColor: '#effd80' }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={<span>Loading...</span>}>
        <Model />
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeBufferGeometry args={[100, 100]} />
          <meshStandardMaterial color="#effd80" />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
