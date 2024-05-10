/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Leo Isidro (https://sketchfab.com/leo.isidro3)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pizza-5b19b3bb03ed4a0c846f208b708bf24c
Title: PIZZA
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Burger(props) {
  const { nodes, materials } = useGLTF("../../burger.glb");
  return (
    <group scale={0.3} position={[0,-0.3,0]} {...props} dispose={null}>
    <group scale={0.01}>
      <mesh
        geometry={nodes.bun_bun001_0.geometry}
        material={materials['bun.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.vegeis_vegies001_0.geometry}
        material={materials['vegies.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.pPlane14_lettuce001_0.geometry}
        material={materials['lettuce.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.pPlane15_lettuce001_0.geometry}
        material={materials['lettuce.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.pPlane16_lettuce001_0.geometry}
        material={materials['lettuce.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.pPlane17_lettuce001_0.geometry}
        material={materials['lettuce.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  </group>
  );
}

useGLTF.preload("../../burger.glb");