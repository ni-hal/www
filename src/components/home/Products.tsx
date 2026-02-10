'use client'

import Link from 'next/link'
import { products } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Products() {
  const { language } = useLanguage()
  
  return (
    <section className="rs-portfolio-area section-space rs-portfolio-one rs-swiper has-theme-red">
      <div className="container">
        <div className="row g-5 section-title-space align-items-end">
          <div className="col-xxl-7 col-xl-8 col-lg-8">
            <div className="rs-section-title-wrapper">
              <span className="rs-section-subtitle has-theme-red justify-content-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                  <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path>
                </svg>
                Latest
              </span>
              <h2 className="rs-section-title rs-split-text-enable split-in-fade">Our Products</h2>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-4 col-lg-4">
            <div className="rs-portfolio-navigation">
              <button className="swiper-button-prev rs-swiper-btn has-bg-white hover-red"><i className="fa-regular fa-arrow-left"></i></button>
              <button className="swiper-button-next rs-swiper-btn has-bg-white hover-red"><i className="fa-regular fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-portfolio-slider-wrapper">
              <div className="swiper has-space" data-clone-slides="false" data-loop="true" data-speed="1500" data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true" data-effect="false" data-delay="2500" data-item="4" data-item-xl="4" data-item-lg="3" data-item-md="3" data-item-sm="2" data-item-xs="1" data-item-mobile="1" data-margin="30" data-margin-xl="30">
                <div className="swiper-wrapper">
                  {products.map((product, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="rs-portfolio-item">
                        <div className="rs-portfolio-thumb">
                          <img src={product.img} alt="image" />
                        </div>
                        <div className="rs-portfolio-content">
                          <div className="rs-portfolio-tag">
                            <Link href="/products">{language === 'ar' ? product.arTitle : product.title}</Link>
                          </div>
                          <h4 className="rs-portfolio-title underline has-white">
                            <Link href="/products">{language === 'ar' ? product.arSubtitle : product.subtitle}</Link>
                          </h4>
                          <div className="rs-portfolio-btn">
                            <Link href="/products" className="rs-btn has-theme-red has-circle has-icon">
                              <span className="icon-box">
                                <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                  <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                                </svg>
                                <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                  <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                                </svg>
                              </span>
                            </Link>
                          </div>
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
