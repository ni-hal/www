'use client'

import { useEffect, useRef } from 'react'
import { textSlides } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TextSlide() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const inner = marquee.querySelector('.rs-text-slide-inner') as HTMLElement
    if (!inner) return

    // Clone content for seamless loop
    const clone = inner.cloneNode(true) as HTMLElement
    marquee.appendChild(clone)

    let position = 0
    const speed = 1 // pixels per frame

    const animate = () => {
      position -= speed
      const width = inner.offsetWidth
      
      if (Math.abs(position) >= width) {
        position = 0
      }
      
      marquee.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="rs-text-slide-area rs-text-slide-two pt-0">
      <div className="container has-large">
        <div className="row">
          <div className="col-lg-12">
            <div className="rs-text-slide-wrapper" style={{ overflow: 'hidden' }}>
              <div ref={marqueeRef} className="gsap-marquee right speed-20 move-to-1000" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <div className="rs-text-slide-inner" style={{ display: 'flex' }}>
                  {textSlides.map((slide, i) => (
                    <div key={i} className="rs-text-slide-item">
                      <h2 className="rs-text-slide-title">{i > 0 ? '& ' : ''}{language === 'ar' ? slide.arText : slide.text}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
