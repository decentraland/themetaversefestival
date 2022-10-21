import React from 'react'
import { CameraShake, Float, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { KernelSize } from 'postprocessing'

const StarsScene = () => (
    <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
        <Canvas
            camera={{
                fov: 90
            }}
        >
            <Float>
                <Stars radius={250} count={1500} saturation={1} factor={4} speed={.05} />
            </Float>
            <CameraShake />
            <EffectComposer multisampling={16}>
                <Bloom kernelSize={1} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={.5} radius={10} />
                <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={.4} intensity={.6} radius={2} />
            </EffectComposer>
        </Canvas>
    </div>
)

export default StarsScene
