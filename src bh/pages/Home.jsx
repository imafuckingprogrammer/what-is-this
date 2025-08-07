import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SplashCursor } from '../components/ui/splash-cursor'
import { CleanButton } from '../components/ui/clean-button'
import AnimatedSection from '../components/ui/AnimatedSection'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import usePerformanceOptimization from '../hooks/usePerformanceOptimization'

const Home = () => {
  const { shouldRender, getOptimizedProps, enableAnimations, enableComplexEffects, isMobile, isTablet } = usePerformanceOptimization()
  const [showProcessDetails, setShowProcessDetails] = useState({})

  const toggleProcessDetails = (stepIndex) => {
    setShowProcessDetails(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }))
  }
  const services = [
    {
      title: 'Brand Strategy & Identity',
      description: 'Make your brand make sense. Before people buy into your product, they buy into your story. We help you get the message right, and make it stick.',
    },
    {
      title: 'Web & Digital',
      description: 'Your digital presence, designed to perform. Your website is often your first impression. We make sure it\'s not your last.',
    },
    {
      title: 'Content & Production',
      description: 'Scroll-stopping content, built for your brand. We create content that feels good, looks good, and performs even better.',
    },
    {
      title: 'Marketing & Growth',
      description: 'Strategy that scales. Execution that delivers. Design is just the beginning, we help you reach the right people, in the right way, at the right time.',
    },
  ]

  const featuredWork = [
    {
      id: 1,
      title: 'Eblon Dynamics',
      category: 'Heavy Machinery Parts',
      type: 'branding',
      description: 'We partnered with Eblon to build a bold identity and digital presence that tells customers: "You\'ve found your performance partner. You\'re in good hands."',
      metrics: ['4 new partnership opportunities', 'Scalable brand identity', 'Lebanon to MENA expansion'],
      services: ['Branding', 'Creative Direction', 'Web Development'],
      year: '2025',
      heroImage: '/images/casestudies/eblon/Mockup2.png',
    },
    {
      id: 2,
      title: 'Nexus Bridge Advisors',
      category: 'International Consulting',
      type: 'branding',
      description: 'We helped Nexus Bridge tell a clearer story, positioning it as the obvious guide for international companies navigating Syria\'s high-risk, high-potential market.',
      metrics: ['Visual identity that inspires trust', 'Scalable platform ready for growth', 'Matched real-world authority'],
      services: ['Branding', 'Creative Direction', 'Web Design'],
      year: '2025',
      heroImage: '/images/casestudies/nexus/paper%20logo%20mockup.png',
    },
  ]

  const testimonials = [
    {
      quote: 'TrendArt transformed our entire approach to market positioning. Their strategic insights and flawless execution delivered results beyond our expectations.',
      author: 'Sarah Chen',
      role: 'CEO',
      company: 'Nexus Financial',
    },
    {
      quote: 'Working with TrendArt felt like having an extension of our own team. They understood our vision and brought creativity we never imagined possible.',
      author: 'Michael Rodriguez',
      role: 'CMO',
      company: 'Verde Wellness',
    },
    {
      quote: 'The attention to detail and strategic thinking TrendArt brings to every project is unmatched. They consistently exceed expectations.',
      author: 'Jessica Park',
      role: 'VP Marketing',
      company: 'TechCorp',
    },
  ]

  const process = [
    {
      step: 'Discover',
      subtitle: 'You have a vision. We help you see it clearly.',
      description: 'Before anything is designed or planned, we get to know you. We listen, observe, and dig deep into your brand, your goals, and your challenges, so we can understand where you stand and where you want to go.',
      details: [
        'We talk: about your business, your audience, your struggles, and your goals',
        'We research your market and competitors',
        'We review your brand, content, and digital presence',
        'We learn how your audience thinks, feels, and behaves'
      ],
      whyItMatters: 'If we don\'t start with clarity, we risk building the wrong thing. This step ensures we\'re solving the right problem, and sets us up to make smarter decisions moving forward.'
    },
    {
      step: 'Define',
      subtitle: 'You need direction. We bring focus.',
      description: 'Once we\'ve gathered the full picture, we make sense of it. We distill the noise into clear insights and define exactly what needs to be solved, and why it matters.',
      details: [
        'We turn your insights into a clear strategy',
        'We identify the core challenge (or opportunity)',
        'We align on what success looks like',
        'We make sure you and our team are moving in sync'
      ],
      whyItMatters: 'Without a shared understanding of the goal, projects drift. This step makes sure everyone\'s rowing in the same direction, with clarity, purpose, and a plan.'
    },
    {
      step: 'Develop',
      subtitle: 'You bring the ambition. We build the path.',
      description: 'Now, the ideas start to take shape. Based on everything we\'ve learned, we explore solutions — visually, strategically, and technically, and test what works best for your audience and goals.',
      details: [
        'We brainstorm and build creative concepts',
        'We design drafts, prototypes, mockups, or sample content',
        'We gather feedback and collaborate',
        'We refine and improve until it\'s ready to move forward'
      ],
      whyItMatters: 'This phase gives room to test, learn, and evolve, so when we land on the solution, it\'s not just creative. It\'s right.'
    },
    {
      step: 'Deliver',
      subtitle: 'You expect results. We make it real.',
      description: 'This is where we launch, but we don\'t just press publish and disappear. We finalize, refine, and help bring the solution to life across every platform it needs to live on.',
      details: [
        'We wrap up design, strategy, copy, web, content, or campaign assets',
        'We test everything to make sure it\'s flawless',
        'We launch, hand off, or go live, depending on what\'s needed',
        'We support with training, improvements, or next steps'
      ],
      whyItMatters: 'This is what people see, the final outcome. And it needs to be smooth, sharp, and built to perform. We don\'t settle for "done." We deliver with intent.'
    }
  ]

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Retention' },
    { number: '8', label: 'Years Experience' },
    { number: '$2.4B', label: 'Client Revenue Generated' },
  ]

  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden" data-nav-theme="light">
        {shouldRender('complex-effects') && (
          <div className="absolute inset-0 z-0">
            <SplashCursor />
          </div>
        )}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-8 leading-tight">
              In a world of noise, we help you shape what people <span style={{ color: '#0040FF' }}>remember</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center">
              <SmoothTextReveal 
                text="Smart strategies. Clean design. Content that moves."
                className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed justify-center"
                delay={0.1}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <CleanButton 
                  text="Start Your Project" 
                  className="px-8 py-4"
                  style={{ backgroundColor: '#0040FF', color: 'white' }}
                />
              </Link>
              <Link to="/work">
                <CleanButton 
                  text="See Our Work" 
                  className="px-8 py-4"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What we do */}
      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              What we <span style={{ color: '#0040FF' }}>do</span>
            </h2>
            <SmoothTextReveal 
              text="We help brands cut through the noise and make things people care about, with strategy, design, content, and marketing that's clear, intentional, and built to perform."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={enableAnimations ? index * 0.1 : 0} direction="up">
                <motion.div 
                  className="group relative"
                  {...(enableAnimations && {
                    whileHover: { 
                      scale: 1.05, 
                      y: -12,
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25,
                        mass: 0.8
                      }
                    },
                    whileTap: { 
                      scale: 0.98,
                      transition: { 
                        type: "spring", 
                        stiffness: 600, 
                        damping: 30 
                      }
                    }
                  })}
                >
                  <div className="bg-bg-secondary p-8 h-80 flex flex-col justify-between border border-border-light hover:border-border-medium transition-all duration-300 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-md">
                    {/* Background image that appears on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url(/images/casestudies/pagewiseimages/home-page/what-we-do/${['austin-distel-tLZhFRLj6nY-unsplash.jpg', 'crystal-y-S8qMG2g-eFM-unsplash.jpg', 'daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg', 'eftakher-alam-i1VQZsU86ok-unsplash.jpg'][index] || 'austin-distel-tLZhFRLj6nY-unsplash.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Floating image on mouse hover */}
                    <motion.div
                      className="absolute pointer-events-none opacity-0 group-hover:opacity-100 z-20"
                      style={{
                        width: '200px',
                        height: '150px',
                        backgroundImage: `url(/images/casestudies/pagewiseimages/home-page/what-we-do/${['fiona-murray-degraaff-sSmAGI0HUtw-unsplash.jpg', 'harrison-kugler-YNIlpT-P68I-unsplash.jpg', 'map-lying-wooden-table.jpg', 'pexels-bibekghosh-14553705.jpg'][index] || 'fiona-murray-degraaff-sSmAGI0HUtw-unsplash.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                      }}
                      initial={{ scale: 0, rotate: -10 }}
                      whileHover={{ 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20 
                        }
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services">
              <CleanButton 
                text="View All Services" 
                className="px-8 py-4"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem we solve */}
      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
                The <span style={{ color: '#0040FF' }}>Problem</span> We Solve
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                You're not here because you're short on ideas.
              </p>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                You're here because your marketing isn't landing the way it should.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Confusing messaging',
                  'Wasted ad spend', 
                  'Low engagement',
                  'A brand that doesn\'t feel like you'
                ].map((problem, index) => (
                  <motion.div 
                    key={index}
                    className="text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        delay: index * 0.1 + 0.3
                      }
                    }}
                  >
                    <span className="text-text-secondary">{problem}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xl font-semibold text-text-primary">
                You shouldn't have to settle for mediocre marketing.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(/images/casestudies/pagewiseimages/home-page/problem-we-solve/pexels-karolina-grabowska-4959785.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-32 px-6 lg:px-8 bg-bg-quaternary" data-nav-theme="accent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Our Process
            </h2>
            <SmoothTextReveal 
              text="From discovery to delivery, our proven methodology ensures every project is grounded in strategy and designed for impact."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="bg-bg-secondary p-8 rounded-2xl border border-border-light hover:border-border-medium transition-all duration-300 h-full shadow-sm hover:shadow-md"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{step.step}</h3>
                    <p className="text-lg font-semibold text-text-primary mb-4">{step.subtitle}</p>
                    <p className="text-text-secondary leading-relaxed mb-6">{step.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <CleanButton
                      text={showProcessDetails[index] ? 'Show Less' : 'Learn More'}
                      onClick={() => toggleProcessDetails(index)}
                      className={`mb-4 ${showProcessDetails[index] ? 'ring-2 ring-black' : ''}`}
                    />
                    
                    <AnimatePresence>
                      {showProcessDetails[index] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-4 border-t border-border-light">
                            <div>
                              <h4 className="font-semibold text-text-primary mb-3">Here's what happens:</h4>
                              <div className="space-y-2">
                                {step.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-text-accent rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-text-secondary text-sm leading-relaxed">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-text-primary mb-3">Why it matters:</h4>
                              <p className="text-text-secondary leading-relaxed">{step.whyItMatters}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-32 px-6 lg:px-8 bg-bg-primary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Featured <span style={{ color: '#0040FF' }}>work</span>
            </h2>
            <SmoothTextReveal 
              text="A selection of our most impactful projects, showcasing the strategic thinking and creative execution that delivers measurable business outcomes."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredWork.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  <motion.div 
                    className="aspect-[4/3] mb-8 transition-opacity rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }
                    }}
                    style={{
                      backgroundImage: `url(${project.heroImage || `/images/casestudies/pagewiseimages/Services/${['brand-strategy/brands-people-0adHvNJu-Zo-unsplash.jpg', 'Web/pexels-seven11nash-325111.jpg'][index] || 'brand-strategy/brands-people-0adHvNJu-Zo-unsplash.jpg'}`})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="space-y-4">
                    <div className="text-sm font-medium uppercase tracking-wide" style={{ color: '#0040FF' }}>
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary group-hover:text-text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-text-primary">Key Results:</div>
                      <div className="text-sm text-text-secondary">
                        {project.metrics.join(' • ')}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="text-xs px-3 py-1 bg-bg-tertiary text-text-secondary rounded-full border border-border-light"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/work">
              <CleanButton 
                text="View" 
                className="w-36"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Real marketers */}
      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
                <span style={{ color: '#0040FF' }}>Real</span> marketers. Not just button-pushers.
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Let's be honest, a lot of "agencies" are just designers with a logo. They know how to make things look good, but not how to make them work. That's why brands end up with flashy content, weak messaging, and no real results.
                </p>
                <p>
                  We're here to change that.
                </p>
                <p>
                  At TrendArt, strategy comes first. We know how to position brands, build campaigns that convert, and create content that actually connects. Every visual has a purpose. Every decision is backed by thinking.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Three quick points:</h3>
                {[
                  'We think before we design — strategy always leads',
                  'We cut the noise — clarity over clutter',
                  'We build for impact — not just attention'
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        delay: index * 0.1 + 0.3
                      }
                    }}
                  >
                    <span className="text-text-secondary">{point}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(/images/casestudies/pagewiseimages/home-page/real-marketers/authentic-small-youthful-marketing-agency.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to start your project?
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Let's discuss how we can help accelerate your business growth through strategic brand development and innovative digital experiences."
              className="text-xl text-text-secondary mb-12 leading-relaxed"
              delay={0.1}
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <CleanButton 
                  text="Start a Project" 
                  className="px-8 py-4"
                />
              </Link>
              <Link to="/work">
                <CleanButton 
                  text="See Our Work" 
                  className="px-8 py-4"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}

export default Home