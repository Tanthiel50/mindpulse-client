import React, {useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, GradientTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/logo_mindpulse.glb");
  // const logo = useRef();

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   logo.current.position.y = (Math.abs(Math.sin(a*0.6))*0.3)+5.3
  // });

  /**
   * Catch div "citation"'s position by id
   */
  // function Citation() {
  //   const elem = document.getElementById("citation");
  //     const rect = elem.getBoundingClientRect();
  //   return [ rect["right"], rect["bottom"]];
  //   }
  // useEffect(() => {
  //   Citation();
  // }, []);
  // transforme pixel position info into ratio to pass it next to the logo's position
  // const [QuoteX, QuoteY] = Citation();
  // const positionX = (window.innerWidth-QuoteX)/window.innerWidth;
  // const positionY = (window.innerHeight - QuoteY) / window.innerHeight;
  // console.log(positionX*2, positionY*4);




  // Function Returns :
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
          position={[ 4.5, 6, 2]}
        >
          <meshStandardMaterial colors={"white"} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/logo_mindpulse.glb");
