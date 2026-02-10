'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { navigation } from '@/lib/data/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className=''>
      <header className={`rs-header-area rs-header-four has-theme-light-blue ${isSticky ? 'rs-sticky-header active' : ''}`} style={{ position: isSticky ? 'fixed' : 'relative', backgroundColor: '#fff', zIndex: 999, opacity: 1, visibility: 'visible', display: 'block', top: isSticky ? 0 : 'auto', left: 0, right: 0, width: '100%' }}>
      <div className="container-fluid">
        <div className="rs-header-inner" id="rs-sticky-header" style={{ opacity: 1, visibility: 'visible', display: 'flex' }}>
          <div className="rs-header-left">
            <div className="rs-header-logo-wrapper">
              <div className="rs-header-logo">
                <Link href="/">
                  <img src="/assets/images/logo/aba-logo.webp" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="rs-header-menu">
            <nav id="mobile-menu" className="main-menu p-0">
              <ul className="multipage-menu">
                {navigation.menu.map((item, index) => (
                  <li key={index} className={item.submenu ? 'menu-item-has-children' : ''}>
                    {item.href ? (
                      <Link href={item.href}>{language === 'ar' ? item.titleAr : item.title}</Link>
                    ) : (
                      <a href="#">{language === 'ar' ? item.titleAr : item.title}</a>
                    )}
                    {item.submenu && (
                      <ul className="submenu last-children">
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link href={sub.href}>{language === 'ar' ? sub.titleAr : sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="rs-header-right">
            <div className="rs-header-search-wrapper" style={{ position: 'relative' }}>
              <div className="rs-header-search-icon has-theme-light-blue" onClick={() => setShowLangMenu(!showLangMenu)} style={{ cursor: 'pointer' }}>
                <img src="/assets/images/kw.webp" alt="Kuwait" />
              </div>
              {showLangMenu && (
                <div style={{ position: 'absolute', top: '100%', right: 0, background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '4px', marginTop: '10px', minWidth: '120px', zIndex: 1000 }}>
                  <button onClick={() => { toggleLanguage(); setShowLangMenu(false); }} style={{ display: 'block', width: '100%', padding: '10px 20px', border: 'none', background: 'transparent', color: '#000', textAlign: 'left', cursor: 'pointer' }}>{language === 'en' ? 'العربية' : 'English'}</button>
                </div>
              )}
            </div>
            
            <div className="rs-header-hamburger has-theme-light-blue">
              <div className="sidebar-toggle">
                <a className="bar-icon" href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 21 20" fill="none">
                    <path d="M8.55566 11H1.55566C1.29045 11 1.03609 11.1054 0.848557 11.2929C0.661021 11.4804 0.555664 11.7348 0.555664 12V19C0.555664 19.2652 0.661021 19.5196 0.848557 19.7071C1.03609 19.8946 1.29045 20 1.55566 20H8.55566C8.82088 20 9.07523 19.8946 9.26277 19.7071C9.45031 19.5196 9.55566 19.2652 9.55566 19V12C9.55566 11.7348 9.45031 11.4804 9.26277 11.2929C9.07523 11.1054 8.82088 11 8.55566 11ZM7.55566 18H2.55566V13H7.55566V18ZM19.5557 0H12.5557C12.2904 0 12.0361 0.105357 11.8486 0.292893C11.661 0.48043 11.5557 0.734784 11.5557 1V8C11.5557 8.26522 11.661 8.51957 11.8486 8.70711C12.0361 8.89464 12.2904 9 12.5557 9H19.5557C19.8209 9 20.0752 8.89464 20.2628 8.70711C20.4503 8.51957 20.5557 8.26522 20.5557 8V1C20.5557 0.734784 20.4503 0.48043 20.2628 0.292893C20.0752 0.105357 19.8209 0 19.5557 0ZM18.5557 7H13.5557V2H18.5557V7ZM19.5557 11H12.5557C12.2904 11 12.0361 11.1054 11.8486 11.2929C11.661 11.4804 11.5557 11.7348 11.5557 12V19C11.5557 19.2652 11.661 19.5196 11.8486 19.7071C12.0361 19.8946 12.2904 20 12.5557 20H19.5557C19.8209 20 20.0752 19.8946 20.2628 19.7071C20.4503 19.5196 20.5557 19.2652 20.5557 19V12C20.5557 11.7348 20.4503 11.4804 20.2628 11.2929C20.0752 11.1054 19.8209 11 19.5557 11ZM18.5557 18H13.5557V13H18.5557V18ZM8.55566 0H1.55566C1.29045 0 1.03609 0.105357 0.848557 0.292893C0.661021 0.48043 0.555664 0.734784 0.555664 1V8C0.555664 8.26522 0.661021 8.51957 0.848557 8.70711C1.03609 8.89464 1.29045 9 1.55566 9H8.55566C8.82088 9 9.07523 8.89464 9.26277 8.70711C9.45031 8.51957 9.55566 8.26522 9.55566 8V1C9.55566 0.734784 9.45031 0.48043 9.26277 0.292893C9.07523 0.105357 8.82088 0 8.55566 0ZM7.55566 7H2.55566V2H7.55566V7Z" fill="#616161"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
   
  )
}
