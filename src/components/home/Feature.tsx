import { featuresData } from '@/lib/data'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Feature() {
  const { language } = useLanguage()
  const features = featuresData[language as keyof typeof featuresData]

  return (
    <section className="rs-feature-area rs-feature-five section-space">
      <div className="container has-large">
        <div className="row g-5">
          {features.map((feature) => (
            <div key={feature.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="rs-feature-item wow fadeInUp" data-wow-delay={feature.delay} data-wow-duration="1s">
                <div className="rs-feature-bg-thumb" data-background="assets/images/bg/features-bg-02.png"></div>
                <div className="rs-feature-icon" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                <h5 className="rs-feature-title">{feature.title}</h5>
                <div className="rs-feature-descrip">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
