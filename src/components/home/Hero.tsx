'use client'

import Link from 'next/link'
import Image from 'next/image'
import { heroSlides } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function Hero() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section
      className="rs-banner-area rs-banner-six p-relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="rs-banner-slider-wrapper overflow-hidden">
        <Swiper
          key={language} // important: reinitialize on language change
          modules={[Navigation, Autoplay, EffectFade]}
          dir={isRTL ? 'rtl' : 'ltr'}
          slidesPerView={1}
          loop={true}
          speed={2000}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="rs-banner-item-wrapper relative">
                
                {/* Background Image */}
                <div className="rs-banner-bg-thumb absolute inset-0 -z-10">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>

                <div className="container-fluid">
                  <div className="row g-5">
                    <div className="col-xl-7 col-lg-7">
                      <div className="rs-banner-item">
                        <div className="rs-banner-content">

                          {/* Subtitle */}
                          <span
                            className="rs-banner-subtitle"
                            style={{
                              fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit',
                              textTransform: isRTL ? 'none' : undefined,
                            }}
                          >
                            <img
                              src="/assets/images/shape/border-line.png"
                              alt=""
                            />
                            {isRTL ? slide.arSubtitle : slide.subtitle}
                          </span>

                          {/* Title */}
                          <h1
                            className="rs-banner-title"
                            style={{
                              fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit',
                              textTransform: isRTL ? 'none' : undefined,
                            }}
                          >
                            {isRTL ? slide.arTitle : slide.title}
                          </h1>

                          {/* Button */}
                          <div className="rs-banner-info">
                            <div className="rs-about-btn">
                              <Link
                                className="rs-btn has-theme-light-blue has-icon has-bg"
                                href="/products"
                              >
                                {isRTL ? 'المزيد من التفاصيل' : 'More Details'}
                                <span className="icon-box">
                                  →
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
            </SwiperSlide>
          ))}

          {/* Navigation */}
          <div className="rs-banner-navigation">
            <button className="swiper-button-prev rs-swiper-btn has-theme-light-blue" />
            <button className="swiper-button-next rs-swiper-btn has-theme-light-blue" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
