// Scene.js
import React, { useRef,useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations } from '@react-three/drei';

const Scene = () => {
    const group = useRef();
   
    const { nodes, materials, animations } = useLoader(GLTFLoader, '/SuitMan.glb');
    console.log("animations",animations)
    const mixer = useRef();



    

 

    // Create a mixer to manage animations
   

    // Play all animations on component mount
    useEffect(() => {
        if (animations && animations.length) {
            mixer.current = new THREE.AnimationMixer(group.current);
            animations.forEach((clip) => {
                mixer.current.clipAction(clip);
            });
        }
        return () => {
            mixer.current && mixer.current.stopAllAction();
        };
    }, [animations]);


    useFrame((state, delta) => {
        if (mixer.current) mixer.current.update(delta);
       
    });
       // Function to play animation by name
       const playAnimationByName = (animationName) => {
        if (mixer.current && animations) {
            const clip = animations.find((clip) => clip.name === animationName);
            if (clip) {
                mixer.current.stopAllAction();
                mixer.current.clipAction(clip).play();
            }
        }
    };
    // Example of playing an animation by name (you can trigger this based on your app logic)
    React.useEffect(() => {
        playAnimationByName("Jumping"); // Replace with actual animation name
    }, []);

    return (
        <group ref={group}>
            <primitive object={nodes.Scene} />
            {/* Add more primitives or adjust scene as needed */}
        </group>
    );
};

export default Scene