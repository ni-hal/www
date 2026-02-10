'use client'

import Image from 'next/image'
import { clients } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

export default function Clients() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section
      className="rs-brand-area rs-brand-one section-space-bottom"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row justify-center mb-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="col-xl-7 col-lg-7">
            <div className="rs-section-title-wrapper text-center">
              <span className="rs-section-subtitle has-theme-red" >
                {isRTL ? 'الشركاء' : 'Partners'}
              </span>
              <h2 className="rs-section-title" >
                {isRTL ? 'عملاؤنا' : 'Our Clients'}
              </h2>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-brand-wrapper overflow-hidden">
              <Swiper
                key={language} // re-init when language changes
                modules={[Autoplay]}
                dir={isRTL ? 'rtl' : 'ltr'}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {clients.map((client, i) => (
                  <SwiperSlide key={i}>
                    <div className="rs-brand-item has-clip-path flex justify-center items-center">
                      <div className="rs-brand-thumb">
                        <Image
                          src={client}
                          alt="client"
                          width={180}
                          height={100}
                          className="object-contain"
                        />
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
