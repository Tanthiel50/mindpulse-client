import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, GradientTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");
  // const logo = useRef();

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   logo.current.position.y = (Math.abs(Math.sin(a*0.6))*0.3)+5.3
  // });

  return (
    <>
      <group receiveShadow castShadow {...props} dispose={null}>
        <mesh
          //ref={logo}
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.material}
          scale={[150, 50, 150]}
          rotation={[Math.PI * 0.5, 0, 0]}
          position={[2.4, 5.4, 0.25]}
        >
          <meshStandardMaterial colors={"white"} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");
