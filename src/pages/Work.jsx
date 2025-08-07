import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import { MultiSelectButtons } from '../components/ui/multi-select-buttons'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState(['All Work'])
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const filterOptions = ['All Work', 'Branding', 'Web Development', 'Content Strategy', 'Healthcare', 'Fintech', 'B2B', 'Other']
  const filterMap = {
    'All Work': 'all',
    'Branding': 'branding', 
    'Web Development': 'web',
    'Content Strategy': 'content',
    'Healthcare': 'healthcare',
    'Fintech': 'fintech',
    'B2B': 'b2b',
    'Other': 'other'
  }

  const portfolio = [
    {
      id: 1,
      title: 'Eblon Dynamics',
      category: 'Heavy Machinery Parts',
      type: 'branding',
      tags: ['Branding', 'Web Dev', 'B2B'],
      description: 'We partnered with Eblon to build a bold identity and digital presence that tells customers: "You\'ve found your performance partner. You\'re in good hands."',
      metrics: ['4 new partnership opportunities', 'Scalable brand identity', 'Lebanon to MENA expansion'],
      services: ['Branding', 'Creative Direction', 'Web Development'],
      year: '2025',
      heroImage: '/images/casestudies/eblon/Mockup2.png',
      websiteUrl: 'https://eblondynamics.com',
      fullCaseStudy: {
        subtitle: 'Helping Machinery Buyers Feel Confident Again',
        challenge: 'Buyers were looking for a reliable, forward-thinking parts supplier — but Eblon\'s old presentation didn\'t match the quality behind the scenes. They needed more than just a logo or a landing page. They needed a brand story that inspired trust, clarity, and confidence.',
        solution: 'We helped Eblon show up like the high-performance partner they already were — visually, verbally, and strategically.',
        details: [
          {
            title: 'Branding',
            description: 'We designed a powerful, modern logo combining a gear and a rising pyramid — symbolizing both industrial strength and forward momentum. The color scheme (black, silver, and deep purple) evokes confidence, durability, and aspiration.',
            image: '/images/casestudies/eblon/ElponDynamicsLogov2%201.png'
          },
          {
            title: 'Creative Direction', 
            description: 'Our visual direction avoided fluff and focused on what heavy equipment buyers care about: performance, precision, and results. High-res imagery of rugged materials with clean, bold layouts.',
            image: '/images/casestudies/eblon/Frame%205.png'
          },
          {
            title: 'Web Development',
            description: 'We built a fast, mobile-optimized website with conversion-friendly layout for B2B buyers, service sections tailored to procurement teams, and structured content built for SEO.',
            image: '/images/casestudies/eblon/Screenshot%202025-08-05%20135448.png'
          }
        ],
        results: [
          'A scalable brand identity that speaks trust and ambition',
          'A clean website that drives engagement and inquiries', 
          'Four new partnership opportunities from impressed companies',
          'Internal confidence to scale from Lebanon to wider MENA market'
        ],
        testimonial: {
          quote: 'We finally feel like a real company. The new brand helped us close deals faster — and it shows people we\'re serious.',
          author: 'Eblon Dynamics Team'
        },
        gallery: [
          '/images/casestudies/eblon/Logo_on_the_Builiding_Mockup_12.png',
          '/images/casestudies/eblon/close-up-logo-mockup.png',
          '/images/casestudies/eblon/Frame%207.png'
        ]
      }
    },
    {
      id: 2,
      title: 'Nexus Bridge Advisors',
      category: 'International Consulting',
      type: 'web',
      tags: ['Branding', 'Web Design', 'B2B'],
      description: 'We helped Nexus Bridge tell a clearer story, positioning it as the obvious guide for international companies navigating Syria\'s high-risk, high-potential market.',
      metrics: ['Visual identity that inspires trust', 'Scalable platform ready for growth', 'Matched real-world authority'],
      services: ['Branding', 'Creative Direction', 'Web Design'],
      year: '2025',
      heroImage: '/images/casestudies/nexus/paper%20logo%20mockup.png',
      websiteUrl: 'https://nexusbridgeadvisors.com',
      fullCaseStudy: {
        subtitle: 'Helping Global Businesses Enter Syria with Confidence',
        challenge: 'For over a decade, Nexus Bridge had advised 50+ global companies on market entry into Syria, but their outdated visual identity and missing web presence made it difficult for prospects to trust what they couldn\'t see.',
        solution: 'We applied clear messaging, confident design, and strategic direction to show potential clients: "You\'re in the right place. You don\'t have to figure this out alone."',
        details: [
          {
            title: 'Branding',
            description: 'We created a clean, minimal logo centered around a stylized arch, representing Nexus\'s role in helping clients cross into new markets with stability. The refined serif wordmark projects professionalism and legacy.',
            image: '/images/casestudies/nexus/NexusBridgeLogoName.V1.png'
          },
          {
            title: 'Creative Direction',
            description: 'Balanced layouts and clean whitespace to signal clarity, with understated imagery and visual metaphors (paths, bridges, arches) that reinforce connection and guidance.',
            image: '/images/casestudies/nexus/Frame%209.png'
          },
          {
            title: 'Web Design',
            description: 'A professional, conversion-friendly layout with SEO-optimized structure, messaging that makes the visitor the hero, and Nexus the expert guide.',
            image: '/images/casestudies/nexus/Screenshot%202025-08-05%20142203.png'
          }
        ],
        results: [
          'A visual identity that inspires trust at first glance',
          'A website that tells their story with precision and authority',
          'A scalable platform ready to support growth and partner outreach',
          'Confidence to pursue bigger opportunities without explaining from scratch'
        ],
        testimonial: {
          quote: 'Our new identity doesn\'t just look good, it finally matches the level of impact we\'ve had behind the scenes for years. It\'s clear, confident, and allows us to speak to the right people.',
          author: 'Partner at Nexus Bridge Advisors'
        },
        gallery: [
          '/images/casestudies/nexus/paper%20logo%20mockup.png',
          '/images/casestudies/nexus/NexusBridgeLogo.V1.png'
        ]
      }
    },
    {
      id: 3,
      title: 'Verde Wellness',
      category: 'Healthcare & Wellness',
      type: 'branding',
      tags: ['Branding', 'Content Strategy', 'Healthcare'],
      description: 'Developed a comprehensive wellness brand identity that positions Verde as the trusted partner for holistic health solutions and sustainable wellness practices.',
      metrics: ['40% increase in client inquiries', 'Brand recognition across 3 markets', 'Digital platform engagement up 60%'],
      services: ['Brand Identity', 'Content Strategy', 'Digital Marketing'],
      year: '2025',
      heroImage: '/images/casestudies/pagewiseimages/Services/consulting/pexels-rdne-9034728.jpg'
    },
    {
      id: 4,
      title: 'Quantum Ventures',
      category: 'Investment & Finance',
      type: 'web',
      tags: ['Web Development', 'Fintech', 'B2B'],
      description: 'Created a sophisticated digital presence for Quantum Ventures that communicates trust, expertise, and innovation in the competitive fintech investment space.',
      metrics: ['35% more qualified leads', 'Professional credibility established', 'Streamlined client onboarding'],
      services: ['Web Development', 'UX Design', 'Brand Strategy'],
      year: '2025',
      heroImage: '/images/casestudies/pagewiseimages/Services/Web/budka-damdinsuren-xihqiK6rD9k-unsplash.jpg'
    }
  ]

  const clients = [
    'Axiom Dynamics', 'Zenith Solutions', 'Vortex Industries', 'Pinnacle Systems', 'Quantum Ventures', 'Nexus Global',
    'Stellar Corp', 'Infinity Labs', 'Apex Technologies', 'Matrix Enterprises', 'Phoenix Partners', 'Summit Group',
  ]


  const filteredPortfolio = activeFilter[0] === 'All Work' || filterMap[activeFilter[0]] === 'all'
    ? portfolio 
    : portfolio.filter(project => project.type === filterMap[activeFilter[0]])

  return (
    <div className="bg-bg-primary">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-8" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-english_violet mb-8">
              Work that drives<br />
              measurable impact
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="A showcase of strategic thinking, creative execution, and business results across diverse industries and market challenges."
              className="text-xl text-text-secondary leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex justify-center mb-16">
              <MultiSelectButtons
                options={filterOptions}
                selectedValues={activeFilter}
                onChange={setActiveFilter}
                multiple={false}
                className="justify-center"
              />
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedCaseStudy(project)}
                >
                  <motion.div 
                    className="aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative"
                    style={{
                      backgroundImage: `url(${project.heroImage || `/images/casestudies/pagewiseimages/Services/${['brand-strategy/brands-people-0adHvNJu-Zo-unsplash.jpg', 'Web/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg', 'consulting/pexels-mikael-blomkvist-6476779.jpg', 'marketing/pexels-rethaferguson-3811082.jpg'][index] || 'brand-strategy/brands-people-0adHvNJu-Zo-unsplash.jpg'}`})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-vista_blue bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click for case study
                      </div>
                    </div>
                  </motion.div>
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-text-primary">Key Results:</div>
                      <div className="text-sm text-text-secondary">
                        {project.metrics.join(' • ')}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIndex) => (
                          <motion.span
                            key={serviceIndex}
                            className="text-xs px-3 py-1 bg-bg-tertiary text-text-secondary rounded-full border border-border-light"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1, 
                              y: 0,
                              transition: { 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 20,
                                delay: serviceIndex * 0.1 + 0.5
                              }
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              transition: { 
                                type: "spring", 
                                stiffness: 400, 
                                damping: 25 
                              }
                            }}
                          >
                            {service}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-english_violet mb-6">
              Trusted by industry leaders
            </h2>
            <SmoothTextReveal 
              text="We've had the privilege of partnering with innovative companies across various industries and stages of growth."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <motion.div
                  className="flex items-center justify-center h-16 text-text-quaternary font-medium hover:text-text-primary transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  {client}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && selectedCaseStudy.fullCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-bg-primary rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-bg-secondary rounded-full flex items-center justify-center text-text-primary hover:bg-bg-tertiary transition-colors z-10"
              >
                ✕
              </button>

              {/* Hero Section */}
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${selectedCaseStudy.id === 2 ? selectedCaseStudy.fullCaseStudy?.gallery?.[0] : selectedCaseStudy.heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium uppercase tracking-wide mb-2">
                    {selectedCaseStudy.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedCaseStudy.title}</h2>
                  <p className="text-sm opacity-90">{selectedCaseStudy.services.join(' · ')}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Subtitle */}
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  {selectedCaseStudy.fullCaseStudy.subtitle}
                </h3>

                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">The Challenge</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {selectedCaseStudy.fullCaseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Our Solution</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {selectedCaseStudy.fullCaseStudy.solution}
                  </p>
                </div>

                {/* What We Did */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-text-primary mb-6">What We Did</h4>
                  <div className="space-y-8">
                    {selectedCaseStudy.fullCaseStudy.details.map((detail, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                          <h5 className="text-md font-semibold text-text-primary mb-3">{detail.title}</h5>
                          <p className="text-text-secondary leading-relaxed text-sm">{detail.description}</p>
                        </div>
                        <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                          <img 
                            src={detail.image} 
                            alt={detail.title}
                            className="w-full rounded-xl shadow-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">The Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCaseStudy.fullCaseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-text-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-bg-secondary p-6 rounded-xl mb-8">
                  <p className="text-lg text-text-secondary italic leading-relaxed mb-4">
                    "{selectedCaseStudy.fullCaseStudy.testimonial.quote}"
                  </p>
                  <p className="text-text-primary font-semibold">
                    — {selectedCaseStudy.fullCaseStudy.testimonial.author}
                  </p>
                </div>

                {/* Gallery */}
                {selectedCaseStudy.fullCaseStudy.gallery && selectedCaseStudy.fullCaseStudy.gallery.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedCaseStudy.fullCaseStudy.gallery.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`Gallery image ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-xl shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="text-center pt-6 border-t border-border-light">
                  <p className="text-text-secondary mb-6">
                    Ready to transform your brand like we did for {selectedCaseStudy.title}?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {selectedCaseStudy.websiteUrl && (
                      <a 
                        href={selectedCaseStudy.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setSelectedCaseStudy(null)}
                      >
                        <CleanButton text="Visit Website" className="px-8 py-4" />
                      </a>
                    )}
                    <Link to="/contact" onClick={() => setSelectedCaseStudy(null)}>
                      <CleanButton text="Start Your Project" className="px-8 py-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-english_violet">
              Let's create something exceptional
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Ready to see your brand achieve similar results? Let's discuss how we can help accelerate your business growth through strategic brand development."
              className="text-xl text-text-secondary mb-12 leading-relaxed"
              delay={0.1}
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.5}>
            <Link to="/contact">
              <CleanButton 
                text="Build" 
                className="w-40"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Work