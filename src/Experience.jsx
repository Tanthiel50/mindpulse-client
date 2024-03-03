import { shaderMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { gradientVertexShader } from "./Shaders/gradient/vertex.js";
import { gradientFragmentShader } from "./Shaders/gradient/fragment.js";
import * as THREE from "three";
import { Perf } from "r3f-perf";

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#8390C8"),
    uColorEnd: new THREE.Color("#AE8ABE"),
    uBlackColor: new THREE.Color("#01030D"),
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
      <color args={["#000000"]} attach="background" />
      <mesh rotation={[Math.PI*0.5, 0, 0]}>
        <planeGeometry args={[15, 15]} />
        <gradientMaterial ref={gradientMaterial} side={THREE.DoubleSide} />{" "}
      </mesh>
    </>
  );
}
