import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Mesh, MeshStandardMaterial, Object3D } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Object3D;
  };
};

type PaceUpProps = JSX.IntrinsicElements["group"];

export function PaceUp(props: PaceUpProps) {
  const { nodes } = useGLTF("/model.glb") as GLTFResult;

  // Change color to dark green to match the image
  const material = useMemo(
    () => new MeshStandardMaterial({ color: "#3d5c33" }),
    []
  );

  return (
    <group {...props} dispose={null} rotation={[1, 1, 1]}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof Mesh) {
          return (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={material}
              // Remove any rotation here if needed
              scale={[1, 1, 1]} // Adjust scale if necessary
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/model.glb");
