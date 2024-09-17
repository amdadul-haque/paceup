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
              rotation={[Math.PI * 0.34, Math.PI * 0.15, Math.PI * -0.26]}
              // rotation={[Math.PI * 0.27, Math.PI * 0.21, Math.PI * -0.23]}
              // rotation={[Math.PI * 0.15, Math.PI * 0.1, 0]} works little
              // rotation={[Math.PI * 0.1, Math.PI * 0.05, 0]}
              // rotation={[Math.PI * 0.05, Math.PI * 0.02, 0]}
              scale={[1, 0.2, 1]}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/model.glb");
