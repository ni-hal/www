import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/layout/Preloader'
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: 'ABA Electricals Kuwait',
  description: 'Leading electrical panel manufacturer in Kuwait',
  icons: {
    icon: '/assets/images/favicon.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="no-js">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/vendor/spacing.css" />
        <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/vendor/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="rs-smoother-yes">
        <LanguageProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/lenis.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/rs-scroll-trigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/rs-splitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/purecounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
