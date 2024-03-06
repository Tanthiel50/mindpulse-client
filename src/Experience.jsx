import { shaderMaterial, OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { gradientVertexShader } from "./Shaders/gradient/vertex.js";
import { gradientFragmentShader } from "./Shaders/gradient/fragment.js";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import { Model } from "./logoMindPulse.jsx";

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#8390C8"),
    uColorEnd: new THREE.Color("#AE8ABE"),
    uBlackColor: new THREE.Color("#000000"),
  },
  gradientVertexShader,
  gradientFragmentShader
);

extend({ GradientMaterial });

export default function Experience() {
  const gradientMaterial = useRef();

  useFrame((state, delta) => {
    gradientMaterial.current.uTime += delta;
  });

  return (
    <>
      {/* outils de staging */}
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />
      <color args={["#030202"]} attach="background" />
      {/* <ambientLight intensity={3} /> */}

      {/* lights */}
      <rectAreaLight
        width={7}
        height={7}
        color={"white"}
        intensity={3}
        position={[2, 5, 5]}
        lookAt={[2, 5, 0.25]}
        penumbra={1}
        castShadow
      />

      {/* rectangle dégradé + perlin noise */}
      <mesh>
        <planeGeometry args={[15, 15]} />
        <gradientMaterial ref={gradientMaterial} side={THREE.DoubleSide} />
      </mesh>
      {/* logo flottant */}
      <Float
        floatIntensity={5}
        scale={1}
        rotationIntensity={0.3}
        rotationSpeed={0.2}
        floatingRange={[0.015, -0.015]}
        speed={6}
      >
        <Model />
      </Float>
    </>
  );
}
