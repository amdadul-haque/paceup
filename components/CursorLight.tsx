"use client";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { PointLight, Vector3 } from "three";

const CursorLight: React.FC = () => {
  const lightRef = useRef<PointLight>(null);
  const { camera, size } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  // Update light position based on mouse
  useFrame(() => {
    if (lightRef.current) {
      const vector = new Vector3(mouse.x, mouse.y, 0.85).unproject(camera);
      lightRef.current.position.lerp(vector, 0.3); // Smooth transition
    }
  });

  return (
    <>
      {/* <pointLight
        ref={lightRef}
        castShadow
        intensity={1}
        distance={9999}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        position={[0, 2, 5]} // Initial position
      /> */}
      <pointLight
        ref={lightRef}
        castShadow
        intensity={0.5} // Lower the intensity to minimize shadow impact
        distance={9999}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        position={[0, 2, 5]} // Keep this at a static position for consistency
      />
    </>
  );
};

export default CursorLight;
