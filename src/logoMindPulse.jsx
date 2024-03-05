import React from "react";
import { useGLTF, GradientTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");
  return (
    <>
      <group receiveShadow castShadow {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.material}
          scale={[60,10,60]}
          rotation={[Math.PI * 0.5, 0, 0]}
          position={[0.9,1.95, 0.25]}
        >
          <meshStandardMaterial>
            <GradientTexture
              stops={[0.0, 1.0]}
              colors={["#8390C8", "#AE8ABE"]}
              size={2}
            />
          </meshStandardMaterial>
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");
