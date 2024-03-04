import React from "react";
import { useGLTF, GradientTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.material}
          scale={150.0}
          rotation={[Math.PI * 0.5, 0, 0]}
          position={[2, 4.5, 1]}
        >
          <meshStandardMaterial>
            <GradientTexture
              stops={[0.0, 1.0]}
              colors={["#8390C8", "#AE8ABE"]}
              size={128}
            />
          </meshStandardMaterial>
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");
