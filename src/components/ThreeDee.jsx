import React, { Suspense } from 'react'
import { CameraShake, Center, Environment, Float, Stage, Stars, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { KernelSize } from 'postprocessing'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef } from 'react'

const Wrapper = () => {
    const colorMap = useLoader(TextureLoader, 'texture.jpg')
    const torus = useRef()
    useFrame(() => {
        torus.current.rotateZ(.002)
    })

    return (
        <mesh position={[0, 0, 0]}>
            <mesh rotation={[0, Math.PI / 3, 0]} position={[-5,-3, 0]}>
                <boxBufferGeometry ref={torus} args={[1,1,1,1,1]} />
                <meshStandardMaterial map={colorMap} roughness={1} side={THREE.DoubleSide} reflectivity={0} />
            </mesh>
            <mesh rotation={[0, 0, 0]} position={[4, -9, 0]}>
                <torusGeometry args={[1,1,2,2,24,1]} />
                <meshStandardMaterial map={colorMap} roughness={1} side={THREE.DoubleSide} />
            </mesh>
        </mesh>
    )
}

const ThreeDee = () => {

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage adjustCamera={false} ambience={.5} intensity={1}>
                        <Wrapper />
                    </Stage>
                </Suspense>
                <CameraShake />
                <EffectComposer multisampling={8}>
                    <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0.9} luminanceSmoothing={0.1} intensity={4} radius={1000} />
                    <Bloom kernelSize={KernelSize.MEDIUM} luminanceThreshold={0.7} luminanceSmoothing={.3} intensity={3} radius={200} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default ThreeDee
