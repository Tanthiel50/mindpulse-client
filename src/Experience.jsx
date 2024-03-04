import { shaderMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { gradientVertexShader } from "./Shaders/gradient/vertex.js";
import { gradientFragmentShader } from "./Shaders/gradient/fragment.js";
import * as THREE from "three";
import { Perf } from "r3f-perf";
// import { Model } from "./models/logoMindPulse.jsx";

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
      <mesh>
        <planeGeometry args={[15, 15]} />
        <gradientMaterial ref={gradientMaterial} side={THREE.DoubleSide} />{" "}
      </mesh>
      {/* <Model /> */}
    </>
  );
}
