import { clients } from '@/lib/data';

export default function Clients() {
  return (
    <section className="rs-brand-area rs-brand-one section-space-bottom rs-swiper">
      <div className="container">
        <div className="row g-5 section-title-space justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="rs-section-title-wrapper text-center">
              <span className="rs-section-subtitle has-theme-red">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                  <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path>
                </svg>
                Partners
              </span>
              <h2 className="rs-section-title rs-split-text-enable split-in-fade">Our Clients</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-brand-wrapper">
              <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="1500" data-autoplay="false" data-dots-dynamic="false" data-center-mode="false" data-hover-pause="true" data-effect="false" data-delay="1500" data-item="4" data-item-xl="3" data-item-lg="3" data-item-md="3" data-item-sm="2" data-item-xs="2" data-item-mobile="1">
                <div className="swiper-wrapper">
                  {clients.map((client, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="rs-brand-item has-clip-path">
                        <div className="rs-brand-thumb">
                          <img src={client} alt="client" />
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
