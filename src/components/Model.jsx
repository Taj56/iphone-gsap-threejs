import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ModelView from './ModelView'
import { yellowImg } from '../utils'
import * as THREE from 'three'

const Model = () => {

    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 pro in Natural Titanium',
        color: ['#8f8aa1', '#ffe7b9', '#6f6c64'],
        img: yellowImg
    })

    // camera control for model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model group
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    useGSAP(()=>{
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
        })
    },[])

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading'>Take a closer look.</h1>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelView />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model