import * as THREE from "three";
import {waterVertexShader} from "./Shaders/water/vertex.js";
import {waterFragmentShader} from "./Shaders/water/fragment.js";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import WaterShaderMaterial from './WaterShader.jsx'


export default function Experience() {

  return (
    <mesh>
      <boxGeometry args={[15, 1, 15]} />
      <WaterShaderMaterial />
    </mesh>
  );
}
