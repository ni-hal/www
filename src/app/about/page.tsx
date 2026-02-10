import Image from 'next/image'

export default function About() {
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
                  <h1 className="rs-breadcrumb-title">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-about-area section-space rs-about-thirteen">
        <div className="container">
          <div className="row align-items-xxl-center g-5">
            <div className="col-xl-6 col-lg-5">
              <div className="rs-about-thumb-wrapper">
                <div className="rs-about-thumb has-large rs-image scroll_reveal reveal_left reveal-active">
                  <Image src="/assets/images/about/about-thumb-20.webp" alt="image" width={500} height={600} />
                </div>
                <div className="rs-about-thumb has-small rs-image scroll_reveal reveal_right reveal-active">
                  <Image src="/assets/images/about/about-thumb-21.webp" alt="image" width={300} height={400} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="rs-about-wrapper">
                <div className="rs-about-content-wrapper">
                  <div className="rs-section-title-wrapper">
                    <span className="rs-section-subtitle has-theme-orange justify-content-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path>
                      </svg>
                      Who We Are
                    </span>
                    <h2 className="rs-section-title rs-split-text-enable split-in-fade">ABA Electricals Kuwait</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rs-counter-area rs-counter-one section-space-bottom has-theme-blue">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="20">20</span>
                    <span className="prefix">+</span>
                  </div>
                  <span className="rs-counter-title">Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="98">98</span>
                    <span className="prefix">%</span>
                  </div>
                  <span className="rs-counter-title">Clients Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="30">30</span>
                    <span className="prefix">+</span>
                  </div>
                  <span className="rs-counter-title">Team Members</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="25">25</span>
                    <span className="prefix">+</span>
                  </div>
                  <span className="rs-counter-title">Our Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
