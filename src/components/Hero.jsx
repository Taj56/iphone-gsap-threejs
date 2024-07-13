import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = ()=>{
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleVideoSrcSet);

    return  ()=>{
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 1.5,
    })
  },[]);

  return (
    <section className='nav-height relative w-full bg-black'>
      <div className='flex-center h-5/6 w-full flex-col '>
        <p className='hero-title'>iPhone 15 Pro</p>

        <div className='w-9/12 md:w-10/12'>
          <video autoPlay muted playsInline={true} key={videoSrc} loop className='pointer-events-none'>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>

      </div>
    </section>
  )
}

export default Hero