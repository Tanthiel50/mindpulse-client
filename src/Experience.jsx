import {
  shaderMaterial,
  Float,
  Text,
  OrthographicCamera,
  Preload,
} from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
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
    uMouse: new THREE.Vector2(0, 0),
  },
  gradientVertexShader,
  gradientFragmentShader
);

extend({ GradientMaterial });

// catch cursor X,Y mouvement on the page
const MouseMove = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
extend({ MouseMove });

// beginning of the function

export default function Experience() {
  const normalizeRatio = (value, min, max) => (value - min) / (max - min);
  const mousePosition = MouseMove();
  const mousePositionX =
    normalizeRatio(mousePosition.x, 0, window.innerWidth) - 0.5;
  const mousePositionY =
    normalizeRatio(mousePosition.y, 0, window.innerWidth) - 0.5;

  // references for the moving background
  const meshRef = useRef();
  const gradientMaterial = useRef();

  useFrame((state, delta) => {
    gradientMaterial.current.uTime += delta;
    gradientMaterial.current.uMouse = new THREE.Vector2(
      mousePositionX,
      mousePositionY
    );
  });

  // function for having the size of the canvas at all time 
  function CanvasId() {
    const elem = document.getElementById("canvasId");
    const rect = elem.getBoundingClientRect();
    return [Math.round(rect["right"]), Math.round(rect["bottom"])];
  }
  useEffect(() => {
    CanvasId();
  }, []);

  //transform pixel position info into ratio to pass it to a const
  const [canvasX, canvasY] = CanvasId();

  // Gestion du défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollAmount = -scrollY * 0.0055; // Ajuster ce facteur au besoin
      console.log(scrollAmount);

      // Ajuster la position du mesh en fonction du défilement
      if (meshRef.current) {
        meshRef.current.position.y = scrollAmount;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // attempt to verify if the home page is active or not
  const homeActive= true; 
    try {
      document.getElementById("citation");
    } catch (err) {
      homeActive=false
    }
console.log(homeActive);

  // Function Returns :
  return (
    <>
      <OrthographicCamera
        makeDefault
        zoom={100}
        near={0.1}
        far={200}
        position={[0, -10, 4]}
      />
      {/* outils de staging */}
      <Perf position="top-left" />
      <color args={["#030202"]} attach="background" />
      {/* <ambientLight intensity={3} /> */}

      {/* lights */}
      <ambientLight intensity={3} />
      {/* rectangle dégradé + perlin noise */}
      <mesh ref={meshRef} scale={[100, 100, 1]} position={[0, 30, 0]}>
        <planeGeometry args={[1, 1]} />
        <gradientMaterial ref={gradientMaterial} side={THREE.DoubleSide} />
      </mesh>
      {/* logo flottant */}
      {Math.round(canvasX) > 768 && document.getElementById("citation") ? (
        <Float
          floatIntensity={3}
          scale={1}
          rotationIntensity={0.1}
          rotationSpeed={0.2}
          floatingRange={[0.035, -0.035]}
          speed={6}
        >
          <Text textAlign="center" position={[4.5, 4, 2]} scale={0.3}>
            {"largeur canvas: " +
              canvasX +
              " px || longueur canvas: " +
              canvasY +
              " px"}
          </Text>
          <Model />
        </Float>
      ) : null}
    </>
  );
}
