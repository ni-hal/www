'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { aboutData } from '@/lib/data'

export default function About() {
  const { language } = useLanguage()
  const data = aboutData[language as keyof typeof aboutData]
  const thumbRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger immediately if already in viewport
    const checkVisibility = () => {
      if (thumbRef.current) {
        const rect = thumbRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true)
        }
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (thumbRef.current) {
      observer.observe(thumbRef.current)
      checkVisibility()
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section className="rs-about-area section-space rs-about-two pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="rs-about-wrapper">
              <div className="rs-about-content-wrapper">
                <div className="rs-section-title-wrapper">
                  <span className="rs-section-subtitle has-theme-red justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path>
                    </svg>
                    {data.subtitle}
                  </span>
                  <h2 className="rs-section-title rs-split-text-enable split-in-fade">{data.title} <span className="rs-theme-red">{data.titleHighlight}</span></h2>
                  <p className="descrip">{data.description}</p>
                </div>
                <div className="rs-about-author-info">
                  <div className="rs-about-btn">
                    <Link className="rs-btn has-theme-red has-icon" href="/about">
                      {data.buttonText}
                      <span className="icon-box">
                        <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div 
                ref={thumbRef}
                className="rs-about-thumb rs-image" 
                style={{ 
                  display: 'block', 
                  opacity: isVisible ? 1 : 0,
                  visibility: 'visible',
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease'
                }}
              >
                <Image decoding="async" src={data.image} alt="image" width={600} height={600} style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
