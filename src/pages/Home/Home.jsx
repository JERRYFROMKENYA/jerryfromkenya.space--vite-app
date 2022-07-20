import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Cards from '../../components/Cards/Cards'

export default function Home() {
  return (
    <>
    <HeroSection video='./videos/video-1.mp4' main='Welcome' sub='to' title='the wonderful world of Jerr' />
    {/* Home section */}
    <Cards />


    </>
  )
}
