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

  const material = useMemo(
    () => new MeshStandardMaterial({ color: "#3d5c33" }),
    []
  );

  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof Mesh) {
          return (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={material}
              // rotation={[0, 0, 0]} 
              // rotation={[Math.PI / 4, 0, 0]} 
              // // rotation={[0, Math.PI / 2, 0]} 
              // rotation={[0, 0, Math.PI / 2]}
              rotation={[Math.PI * 0.28, Math.PI * 0.21, Math.PI * -.23]} 
              scale={[1, .5, 1]}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/model.glb");
