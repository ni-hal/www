'use client'

import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Products() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section
      className="rs-portfolio-area section-space rs-portfolio-one has-theme-red"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        {/* Section Header */}
        <div className="row g-5 section-title-space align-items-end">
          <div className="col-xxl-7 col-xl-8 col-lg-8">
            <div className="rs-section-title-wrapper">
              <span className="rs-section-subtitle has-theme-red justify-content-start">
                {language === 'ar' ? 'نقدم' : 'Providing'}
              </span>
              <h2 className="rs-section-title">
                {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
              </h2>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="col-xxl-5 col-xl-4 col-lg-4">
            <div className="rs-portfolio-navigation flex gap-3 justify-end">
              <button className="swiper-button-prev rs-swiper-btn has-bg-white hover-red" />
              <button className="swiper-button-next rs-swiper-btn has-bg-white hover-red" />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-portfolio-slider-wrapper overflow-hidden">
              <Swiper
                key={language} // important: re-init when language changes
                modules={[Navigation, Autoplay]}
                dir={isRTL ? 'rtl' : 'ltr'}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {products.map((product, i) => (
                  <SwiperSlide key={i}>
                    <div className="rs-portfolio-item">
                      {/* Image */}
                      <div className="rs-portfolio-thumb">
                        <Image
                          src={product.img}
                          alt={product.title}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="rs-portfolio-content">
                        <div className="rs-portfolio-tag">
                          <Link href="/products">
                            {isRTL ? product.arTitle : product.title}
                          </Link>
                        </div>

                        <h4 className="rs-portfolio-title underline has-white">
                          <Link href="/products">
                            {isRTL
                              ? product.arSubtitle
                              : product.subtitle}
                          </Link>
                        </h4>

                        <div className="rs-portfolio-btn">
                          <Link
                            href="/products"
                            className="rs-btn has-theme-red has-circle has-icon"
                          >
                            →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
