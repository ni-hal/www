'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { services } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      const swiperEl = document.querySelector('.rs-services-slide-wrapper .swiper') as any
      if (swiperEl?.swiper) {
        swiperEl.swiper.destroy(true, true)
      }
      setTimeout(() => {
        if ((window as any).initSwiper) {
          (window as any).initSwiper()
        }
      }, 100)
    }
  }, [language])


  return (
    <section className="rs-services-area rs-services-two section-space primary-bg2 rs-swiper rs-services-six">
      <div className="rs-services-bg-thumb" data-background="/assets/images/bg/services-bg-01.webp"></div>
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-3 col-lg-3">
            <div className="rs-services-content-wrapper">
              <div className="rs-section-title-wrapper">
                <span className="rs-section-subtitle has-theme-red justify-content-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path>
                  </svg>
                  {language === "ar" ? "نقدم" : "Providing"}
                </span>
                <h2 className="rs-section-title rs-split-text-enable split-in-fade">{language === "ar" ? "خدماتنا" : "Our Services"}</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="rs-services-slide-wrapper" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="swiper" data-loop="true" data-speed="1500" data-autoplay="true" data-item="2" key={language}>
                <div className="swiper-wrapper">
                  {services.map((service, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="rs-services-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="rs-services-bg-thumb rs-services-bg-thumb02" data-background="/assets/images/service-shape.webp"></div>
                        <h4 className="rs-services-title underline has-theme-blue">
                          <Link href="/services">{language === 'ar' ? service.arTitle : service.title}</Link>
                        </h4>
                         <p className="descrip">{language === "ar" ? service.arDescripation : service.descriapation}</p>
                        <div className="rs-about-btn mb-20">
                          <Link className="rs-btn has-theme-red has-icon" href="/services">Explore More</Link>
                        </div>
                        <div className="rs-services-thumb">
                          <Image src={service.img} alt="image" width={400} height={300} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
