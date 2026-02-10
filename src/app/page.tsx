'use client'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import TextSlide from '@/components/home/TextSlide'
import Clients from '@/components/home/Clients'
import Products from '@/components/home/Products'
import Headers from '@/components/layout/Header'
export default function Home() {
  return (
    <>
 
      <Hero />
      <About />
      <TextSlide />
      <Services />
      <Products />
      <Clients />
     
    </>
  )
}
