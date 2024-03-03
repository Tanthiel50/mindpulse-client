import {shaderMaterial} from "@react-three/drei";
import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { waterVertexShader } from "./Shaders/water/vertex.js";
import { waterFragmentShader } from "./Shaders/water/fragment.js";
import * as THREE from "three";

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,

    uBigWavesSpeed: 0.5,
    uBigWavesElevation: 0.4,
    uBigWavesFrequency: new THREE.Vector2(1.0, 0.5),

    uSmallWaveElevation: 0.5,
    uSmallWaveFrequency: 1.0,
    uSmallWaveSpeed: 0.3,
    uSmallWaveIteration: 5.0,

    uDepthColor: new THREE.Color("#8390C8"),
    uSurfaceColor: new THREE.Color("#AE8ABE"),
    uBlackColor: new THREE.Color("#01030d"),
    uColorOffset: 0.5,
    uColorMultiplier: 2.0,
  },
  waterVertexShader,
  waterFragmentShader
);

extend({ WaterMaterial });

export default function WaterShaderMaterial(){

      const waterMaterial = useRef();
    useFrame((state, delta ) => {
      waterMaterial.current.uTime += delta;
    });
    return <waterMaterial ref={waterMaterial} side={THREE.DoubleSide} />;
}

