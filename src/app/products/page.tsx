'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { products } from '@/lib/data'

export default function Products() {
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
                  <h1 className="rs-breadcrumb-title">Our Products</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-5">
            {products.map((product, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                <div className="rs-product-item">
                  <div className="rs-product-thumb">
                    <Image src={product.img} alt={product.title} width={400} height={400} />
                  </div>
                  <div className="rs-product-content">
                    <h4 className="rs-product-title">
                      <Link href="/products/details">{language === 'ar' ? product.arTitle : product.title}</Link>
                    </h4>
                    <p>{language === 'ar' ? product.arSubtitle : product.subtitle}</p>
                    <Link href="/products/details" className="rs-btn has-theme-red has-icon">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
