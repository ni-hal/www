import Image from 'next/image'
import { contactInfo } from '@/lib/data/navigation'

export default function Contact() {
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
                  <h1 className="rs-breadcrumb-title">Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-contact-area section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="rs-contact-info">
                <h3 className="mb-4">Get In Touch</h3>
                <div className="rs-contact-info-item mb-4">
                  <h5>Office Address</h5>
                  <p>{contactInfo.address}</p>
                </div>
                <div className="rs-contact-info-item mb-4">
                  <h5>Phone Number</h5>
                  <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                  <p><a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a></p>
                </div>
                <div className="rs-contact-info-item">
                  <h5>Email Address</h5>
                  <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="rs-contact-form">
                <h3 className="mb-4">Send Message</h3>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows={5} placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="rs-btn has-theme-light-blue has-icon has-bg">
                    Send Message
                    <span className="icon-box">
                      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
