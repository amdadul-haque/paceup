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

  // Memoize the material to prevent unnecessary re-creations
  const material = useMemo(
    () => new MeshStandardMaterial({ color: "#effd80" }),
    []
  );

  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof Mesh) {
          return (
            <mesh
              key={index}
              castShadow // Enable casting shadows
              receiveShadow // Enable receiving shadows
              geometry={node.geometry}
              material={material}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/model.glb");
