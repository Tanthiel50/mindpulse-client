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
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <color args={["#030202"]} attach="background" />
      <rectAreaLight
        position={[3, 4.5, 5]}
        lookAt={[2, 4.5, -1]}
        intensity={6.5}
        width={6}
        height={6}
      />
      <mesh>
        <planeGeometry receiveShadow args={[15, 15]} />
        <gradientMaterial ref={gradientMaterial} side={THREE.DoubleSide} />{" "}
      </mesh>
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
