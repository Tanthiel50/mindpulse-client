import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={nodes.Curve002.material}
          scale={200.0}
          rotation={[Math.PI * 0.5, 0, 0]}
          position={[0, 4.5, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");
