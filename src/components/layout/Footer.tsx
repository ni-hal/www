import Link from 'next/link'
import { contactInfo } from '@/lib/data/navigation'

export default function Footer() {
  const contact = contactInfo || {
    phone: '+965 1234 5678',
    phone2: '+965 8765 4321',
    email: 'info@abaelectricals.com',
    address: 'Kuwait City, Kuwait',
  }

  return (
    <footer>
      <div className="rs-footer-area rs-footer-two has-theme-light-blue">
        <div className="rs-footer-bg-thumb" data-background="/assets/images/footbg.webp"></div>
        <div className="container">
          <div className="rs-footer-top">
            <div className="row g-5">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-1">
                  <div className="rs-footer-widget-logo mb-25">
                    <Link href="/">
                      <img src="/assets/images/logo/aba-logo.webp" alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-2">
                  <h5 className="rs-footer-widget-title">Useful Links</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-links has-theme-light-blue">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/subsidiaries">Subsidiaries</Link></li>
                        <li><Link href="/clients">Our clients</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-3">
                  <h5 className="rs-footer-widget-title">Office Address</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-meta">
                      <div className="rs-footer-widget-address">
                        <a target="_blank" href="#">{contact.address}</a>
                      </div>
                      <h5 className="rs-footer-widget-title">Email Address</h5>
                      <p>Interested in working with us?</p>
                      <div className="rs-footer-widget-email">
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-4">
                  <h5 className="rs-footer-widget-title">Phone Number</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-contact-info">
                      <div className="rs-footer-widget-number">
                        <span><a href={`tel:${contact.phone}`}>{contact.phone}</a></span>
                        <span><a href={`tel:${contact.phone2}`}>{contact.phone2}</a></span>
                      </div>
                    </div>
                    <h5 className="rs-footer-widget-title">Follow Us</h5>
                    <div className="rs-footer-widget-social">
                      <div className="rs-theme-social has-theme-light-blue">
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                        <a href="#"><i className="ri-facebook-fill"></i></a>
                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rs-footer-copyright-area rs-copyright-one has-theme-light-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="rs-footer-copyright has-theme-blue text-center">
                <p className="underline">© <span id="year">{new Date().getFullYear()}</span> ABA Electricals Kuwait. Designed by <a href="#">Uniweb IT Solutions</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="backtotop-wrap cursor-pointer has-theme-light-blue">
        <svg className="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </footer>
  )
}
