'use client'

import Link from 'next/link'
import { heroSlides } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  
  return (
  
    <section className="rs-banner-area rs-banner-six p-relative rs-swiper">
      <div className="rs-banner-slider-wrapper">
        <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="2000" data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true" data-effect="fade" data-delay="1000" data-item="1">
          <div className="swiper-wrapper">
            {heroSlides.map((slide, i) => (
              <div key={i} className="swiper-slide">
                <div className="rs-banner-item-wrapper">
                  <div className="rs-banner-bg-thumb" data-background={slide.image}></div>
                  <div className="container-fluid">
                    <div className="row g-5">
                      <div className="col-xl-7 col-lg-7">
                        <div className="rs-banner-item">
                          <div className="rs-banner-content">
                            <span className="rs-banner-subtitle">
                              <img src="/assets/images/shape/border-line.png" alt="image" />
                              {language === 'ar' ? slide.arSubtitle : slide.subtitle}
                            </span>
                            <h1 className="rs-banner-title">{language === 'ar' ? slide.arTitle : slide.title}</h1>
                            <div className="rs-banner-info">
                              <div className="rs-about-btn">
                                <Link className="rs-btn has-theme-light-blue has-icon has-bg" href="/products">
                                  More Details
                                  <span className="icon-box">
                                    <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                      <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rs-banner-navigation">
            <button className="swiper-button-prev rs-swiper-btn has-theme-light-blue"><i className="fa-regular fa-arrow-left"></i></button>
            <button className="swiper-button-next rs-swiper-btn has-theme-light-blue"><i className="fa-regular fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  
  )
}
