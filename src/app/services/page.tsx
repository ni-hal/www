'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from "@/contexts/LanguageContext"
import { services } from '@/lib/data'

export default function Services() {
  const { language } = useLanguage()
  return (
    <>
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative">
        <div className="rs-breadcrumb-bg">
          <Image src="/assets/images/inside-bg1.webp" alt="" fill style={{objectFit: 'cover'}} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8">
              <div className="rs-breadcrumb-content-wrapper">
                <div className="rs-breadcrumb-title-wrapper">
                  <h1 className="rs-breadcrumb-title">{language === "ar" ? "الخدمات" : "Services"}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-postbox-area section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-8">
              <div className="rs-services-area rs-services-two section-space rs-services-six pt-0 pb-0">
                <div className="container-fluid">
                  <div className="row">
                    {services.map((service, i) => (
                      <div key={i} className="col-xl-6 col-lg-6">
                        <div className="swiper-slide">
                          <div className="rs-services-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="rs-services-bg-thumb rs-services-bg-thumb02" data-background="/assets/images/service-shape.webp"></div>
                            <h4 className="rs-services-title underline has-theme-blue">
                              <Link href="/services/details">{language === "ar" ? service.arTitle : service.title}</Link>
                            </h4>
                            <p className="descrip">{language === "ar" ? service.arDescripation : service.descriapation}</p>
                            <div className="rs-about-btn mb-20">
                              <Link className="rs-btn has-theme-red has-icon" href="/services/details">Explore More</Link>
                            </div>
                            <div className="rs-services-thumb">
                              <Image src={service.img} alt="image" width={400} height={300} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="rs-sidebar-wrapper rs-sidebar-sticky">
                <div className="sidebar-widget mb-30">
                  <div className="sidebar-search">
                    <form action="#">
                      <div className="sidebar-search-input">
                        <input type="text" placeholder="Searching..." />
                        <button type="submit">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16.9995 17L13.1328 13.1333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
