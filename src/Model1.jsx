// Scene.js
import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations } from '@react-three/drei';

const Scene = () => {
   
    const modelRef=useRef()
    const { scene, animations } = useLoader(GLTFLoader, '/SuitMan.glb');

  

    const { actions } = useAnimations(animations, modelRef);
    console.log("actions animation",actions)

    

   
    useFrame((state, delta) => {
        //console.log("useFram runing....")
        actions.idle.play()
    });

 
 
  
    
    return (
      
            <primitive object={scene} ref={modelRef}/>
           
    );
};

export default Scene