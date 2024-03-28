import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");

  // Function Returns :
  return (
    <>
      <group receiveShadow castShadow {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.material}
          scale={[300, 50, 300]}
          rotation={[Math.PI * 0.5, 0, 0]}
          position={[ 4.5, 6, 2]}
        >
          <meshStandardMaterial colors={"white"} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");