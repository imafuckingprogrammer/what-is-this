import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import AnimatedSection from '../components/ui/AnimatedSection'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)
  const [showLearnMore, setShowLearnMore] = useState(false)

  const services = [
    {
      title: 'Brand Strategy & Identity',
      subtitle: 'Make your brand make sense',
      description: 'Before people buy into your product, they buy into your story. We help you get the message right, and make it stick.',
      features: [
        'Brand positioning & voice',
        'Messaging strategy',
        'Visual identity (logos, color, typography)',
        'Brand guidelines',
      ],
      learnMore: 'A strong brand isn\'t just a logo, it\'s how people feel when they see, hear, or interact with you. We help you find your voice, clarify your story, and shape a brand that\'s built to last.',
      detailedFeatures: [
        'Positioning: We define where your brand stands in the market and why people should care.',
        'Messaging: We write the words that make people get it, and remember it.',
        'Tone of Voice: From captions to campaigns, we help your brand sound like itself.',
        'Visual Identity: Logos, color palettes, typography, and guidelines, crafted to reflect who you are, not just what\'s trendy.',
      ],
      whyItMatters: 'If your brand feels unclear, inconsistent, or forgettable, strategy fixes that. This is the foundation everything else is built on.',
      caseStudy: {
        client: 'Eblon Dynamics',
        result: 'We partnered with Eblon to build a bold identity and digital presence, resulting in 4 new partnership opportunities and internal confidence to scale from Lebanon to the wider MENA market.',
      },
    },
    {
      title: 'Web & Digital',
      subtitle: 'Your digital presence, designed to perform',
      description: 'Your website is often your first impression. We make sure it\'s not your last.',
      features: [
        'Custom websites (static, e-commerce, mobile-first)',
        'Mobile app development',
        'SEO optimization',
        'Performance & speed tuning',
        'Ongoing support and hosting (optional)',
      ],
      learnMore: 'Your website is more than a portfolio. It\'s your digital home, your sales tool, and your first impression. We design and develop with all of that in mind, clean UX, responsive design, and performance that keeps people around.',
      detailedFeatures: [
        'Static & E-commerce Sites: Fast, beautiful, and mobile-ready, with clean interfaces and smart flows.',
        'App Development: User-focused mobile apps, built custom from the ground up.',
        'Performance Optimization: Speed, SEO, and mobile responsiveness, so your site ranks and loads right.',
        'Ongoing Support (Optional): Hosting, updates, and analytics dashboards tailored to your needs.',
      ],
      whyItMatters: 'A pretty site means nothing if it\'s slow, clunky, or confusing. We design to convert, not just to impress.',
      caseStudy: {
        client: 'Nexus Bridge Advisors',
        result: 'We helped Nexus Bridge tell a clearer story with professional web design, creating a visual identity that inspires trust and a scalable platform ready for growth.',
      },
    },
    {
      title: 'Content & Production',
      subtitle: 'Scroll-stopping content, built for your brand',
      description: 'We create content that feels good, looks good, and performs even better.',
      features: [
        'Reels, short-form, and before/after edits',
        'Product and brand photography',
        'High-end ad campaigns (video, scripting, editing)',
      ],
      learnMore: 'The scroll is ruthless, if your content doesn\'t stop someone, it gets skipped. We create with intention: content that catches attention, tells your story, and drives action.',
      detailedFeatures: [
        'Reels & Short-form Video: Scripted or organic, edited to match your tone and goals.',
        'Photography: From lifestyle to product, we handle lighting, styling, and retouching.',
        'Before & After Edits: Perfect for transformation-based businesses (cosmetics, beauty, fitness, etc.).',
        'High-End Ads: Cinematic visuals, full production, storyboarding, scripting, editing.',
      ],
      whyItMatters: 'Good content builds trust. Great content builds momentum. We make sure your brand looks its best, and performs at its best.',
      caseStudy: {
        client: 'Case Study Coming Soon',
        result: 'Detailed case study to be added.',
      },
    },
    {
      title: 'Marketing & Growth',
      subtitle: 'Strategy that scales. Execution that delivers',
      description: 'Design is just the beginning, we help you reach the right people, in the right way, at the right time.',
      features: [
        'Digital marketing campaigns',
        'Social media management',
        'Paid ads (Meta, Google, TikTok, etc.)',
        'Funnel planning & performance tracking',
        'Analytics dashboards (optional)',
      ],
      learnMore: 'Your audience won\'t just show up. We help you find them, speak to them, and guide them through a journey, from awareness to conversion.',
      detailedFeatures: [
        'Digital Campaigns: Strategy-led ads across Meta, Google, TikTok, and more.',
        'Social Media Management: Planning, posting, captioning, and calendar building — tailored to your audience.',
        'Funnel Planning: Build out customer paths that drive action and revenue.',
        'Analytics & Optimization: Ongoing performance checks, tracking tools, and clarity on what\'s working (or not).',
      ],
      whyItMatters: 'Marketing without strategy is guesswork. We bring clarity, consistency, and results, so every move has a reason.',
      caseStudy: {
        client: 'Case Study Coming Soon',
        result: 'Detailed case study to be added.',
      },
    },
    {
      title: 'Consulting & Training',
      subtitle: 'Want to build in-house? We\'ve got you',
      description: 'We help internal teams level up, with clear frameworks, hands-on guidance, and real marketing skills.',
      features: [
        'One-on-one consulting',
        'In-house team training',
        'Strategic audits & planning',
      ],
      learnMore: 'If you\'re building an in-house team or just need sharper direction, we can guide the way. From audits to custom workshops, we share the same thinking we use in our own work, and tailor it to yours.',
      detailedFeatures: [
        '1:1 Consulting: Strategy sessions for founders, CMOs, or anyone shaping the brand.',
        'In-house Team Training: We train your team to think like marketers, not just post like them.',
        'Brand & Content Audits: Honest, thorough reviews with actionable insights.',
      ],
      whyItMatters: 'Sometimes you don\'t need an agency forever, you just need one that helps you grow smarter. We\'re that team.',
      caseStudy: {
        client: 'Case Study Coming Soon',
        result: 'Detailed case study to be added.',
      },
    },
    {
      title: 'B2B Marketing & Partnerships',
      subtitle: 'Build credibility. Grow smarter. Get seen by the right people',
      description: 'We help business-facing brands position themselves with confidence, attract better leads, and turn relationships into real growth.',
      features: [
        'LinkedIn Strategy & Management',
        'Referral Program Campaigns',
        'Thought Leadership Content',
        'Lead Magnet & Funnel Setup',
      ],
      learnMore: 'B2B isn\'t about going viral, it\'s about building trust, showing value, and staying top-of-mind. We help you do that with the right content, on the right platforms, for the right people.',
      detailedFeatures: [
        'LinkedIn Strategy & Management: From content to engagement, we help you grow a presence that earns respect, not just likes.',
        'Thought Leadership Content: Posts, carousels, and videos that position you as the go-to expert in your space.',
        'Referral Program Campaigns: Smart systems to turn existing clients into active promoters.',
        'Lead Magnet & Funnel Setup: Build assets that give value and capture leads, guides, checklists, landing pages, and more.',
      ],
      whyItMatters: 'B2B buyers move slower, think deeper, and expect more. We help you show up like a brand they can trust, with content that leads to real conversations.',
      caseStudy: {
        client: 'Case Study Coming Soon',
        result: 'Detailed case study to be added.',
      },
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, market position, and strategic objectives through comprehensive research and stakeholder interviews.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our team develops a tailored strategic framework that aligns with your business goals and provides a clear roadmap for execution.',
    },
    {
      step: '03',
      title: 'Creation',
      description: 'We bring the strategy to life through exceptional design and development, creating assets that resonate with your target audience.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'We support the launch and implementation of your new brand elements, ensuring consistent execution across all touchpoints.',
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'We monitor performance and continuously optimize based on data and feedback to maximize business impact and ROI.',
    },
  ]

  const packages = [
    {
      name: 'Brand Clarity Kit',
      description: 'For brands that feel scattered and need direction.',
      subtitle: 'Your brand should speak for itself, clearly, confidently, and consistently. This package gives you the strategic foundation you\'ve been missing.',
      features: [
        'Brand Positioning & Messaging',
        'Tone of Voice Guidelines',
        'Visual Identity (logo, color, typography)',
        'Brand Style Guide',
      ],
      bestFor: 'Startups, rebrands, or anyone who says "we\'re not sure how to talk about ourselves."',
      popular: false,
    },
    {
      name: 'Launch-Ready Web',
      description: 'For businesses that need a clean, fast, high-performing website.',
      subtitle: 'We build websites that don\'t just look good, they load fast, convert well, and feel effortless to use.',
      features: [
        'Custom Website Design (Static or E-Commerce)',
        'Mobile Optimization & Responsive UX',
        'SEO Foundations',
        'Performance Tuning',
        'Optional: App Development or Hosting',
      ],
      bestFor: 'Product launches, brand relaunches, or anyone embarrassed by their current website.',
      popular: false,
    },
    {
      name: 'Content Engine',
      description: 'For brands that need to show up online, and look good doing it.',
      subtitle: 'Stop guessing what to post. We help you create content that\'s built for your brand and optimized for the scroll.',
      features: [
        'Reels & Short-Form Video',
        'Professional Photography',
        'Scripted Video Ads or UGC-style Content',
        'Before/After Edits (if applicable)',
        'Optional: Ad Cutdowns or Paid Versions',
      ],
      bestFor: 'Beauty, fashion, clinics, restaurants, or anyone who needs consistent visual content.',
      popular: true,
    },
    {
      name: 'Growth Loop',
      description: 'For brands ready to grow, with real marketing, not just posting.',
      subtitle: 'We create a clear growth strategy, run the right campaigns, and track what\'s working, so you can stop throwing money into the void.',
      features: [
        'Paid Campaigns (Meta, Google, TikTok)',
        'Social Media Management',
        'Funnel Strategy & Planning',
        'Performance Reporting & Dashboards',
        'Optional: Website Conversion Audit',
      ],
      bestFor: 'Brands stuck in a plateau or wasting budget on ads that don\'t convert.',
      popular: false,
    },
    {
      name: 'Inside-Out Consulting',
      description: 'For teams who want to do it right, but need help getting there.',
      subtitle: 'We help your in-house team think like marketers, plan like strategists, and execute with clarity.',
      features: [
        '1:1 Consulting Sessions',
        'In-House Team Training',
        'Strategic & Creative Audits',
        'Custom Playbooks',
      ],
      bestFor: 'Founders, CMOs, or marketing teams building their internal capabilities.',
      popular: false,
    },
    {
      name: 'B2B Growth Suite',
      description: 'For brands selling to other businesses — and ready to be taken seriously.',
      subtitle: 'Stop blending in. We help you show up with authority, build trust at every touchpoint, and generate leads without chasing them.',
      features: [
        'LinkedIn Strategy & Management',
        'Weekly Thought Leadership Content',
        'Referral Program Campaigns',
        'Lead Magnet Creation (guides, landing pages, gated downloads)',
        'Optional: CRM setup, outbound email flows, analytics dashboards',
      ],
      bestFor: 'Consulting firms, service providers, B2B startups, SaaS, and niche agencies that grow through relationships, credibility, and clarity.',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Brand strategy projects typically take 6-8 weeks, while comprehensive rebrands can take 12-16 weeks. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you work with companies of all sizes?',
      answer: 'Yes, we work with startups, mid-market companies, and Fortune 500 organizations. Our approach scales to meet the unique needs and budget requirements of each client.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across multiple industries including technology, healthcare, financial services, retail, and manufacturing. Our strategic approach adapts to any sector.',
    },
    {
      question: 'How do you measure project success?',
      answer: 'We establish clear KPIs at the project outset and track metrics such as brand awareness, engagement rates, conversion improvements, and business growth indicators relevant to your goals.',
    },
    {
      question: 'What is your revision process?',
      answer: 'We include structured revision rounds in all our projects. The number varies by package, but we work collaboratively to ensure the final deliverables exceed your expectations.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer ongoing support and consultation packages to help maintain brand consistency and optimize performance as your business grows.',
    },
  ]

  return (
    <div className="bg-bg-primary">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-8" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-8">
              <SmoothTextReveal text="Everything you need. Nothing you don't." />
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <SmoothTextReveal 
              text="We build brands with intention — from strategy to launch and beyond."
              className="text-xl text-text-secondary leading-relaxed"
              delay={0.1}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          {/* Service Navigation Pills */}
          <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onMouseEnter={() => setActiveService(index)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { 
                    type: "spring", 
                    stiffness: 600, 
                    damping: 30 
                  }
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300'
                }`}
              >
                {service.title}
              </motion.button>
            ))}
          </AnimatedSection>
          
          {/* Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                mass: 0.8
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left: Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-text-primary mb-4">
                    {services[activeService].title}
                  </h2>
                  <p className="text-xl text-text-secondary leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">What's included:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: index * 0.1
                          }
                        }}
                      >
                        <div className="w-2 h-2 bg-text-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <CleanButton
                      text={showLearnMore ? 'Show Less' : 'Learn More'}
                      onClick={() => setShowLearnMore(!showLearnMore)}
                      className={showLearnMore ? 'ring-2 ring-black' : ''}
                    />
                  </div>
                  
                  <AnimatePresence>
                    {showLearnMore && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pt-4 border-t border-border-light">
                          <p className="text-text-secondary leading-relaxed">
                            {services[activeService].learnMore}
                          </p>
                          
                          {services[activeService].detailedFeatures && (
                            <div>
                              <h4 className="font-semibold text-text-primary mb-3">What we offer:</h4>
                              <div className="space-y-3">
                                {services[activeService].detailedFeatures.map((feature, index) => (
                                  <div key={index} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-text-accent rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {services[activeService].whyItMatters && (
                            <div>
                              <h4 className="font-semibold text-text-primary mb-3">Why it matters:</h4>
                              <p className="text-text-secondary leading-relaxed">
                                {services[activeService].whyItMatters}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="bg-bg-tertiary p-6 rounded-2xl border border-border-light">
                  <h4 className="font-semibold text-text-primary mb-3">Case study:</h4>
                  <div className="font-medium text-text-primary mb-2">
                    {services[activeService].caseStudy.client}
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {services[activeService].caseStudy.result}
                  </p>
                </div>
              </div>
              
              {/* Right: Image and Button */}
              <div className="space-y-8">
                <motion.div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(/images/casestudies/pagewiseimages/Services/${
                      [
                        'Brand%20strategy/brands-people-0adHvNJu-Zo-unsplash.jpg',
                        'Web/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg', 
                        'content%20production/pexels-kyleloftusstudios-18015188.jpg',
                        'marketing/pexels-n-voitkevich-8062287.jpg',
                        'consulting/pexels-mikael-blomkvist-6476779.jpg',
                        'B2B/pexels-kindelmedia-7688336.jpg'
                      ][activeService] || 'Brand%20strategy/brands-people-0adHvNJu-Zo-unsplash.jpg'
                    })`,
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
                />
                
                <div className="flex justify-center">
                  <Link to="/contact">
                    <CleanButton 
                      text="Launch" 
                      className="w-40"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              <SmoothTextReveal text="Our process" />
            </h2>
            <SmoothTextReveal 
              text="A proven methodology that ensures strategic alignment, exceptional execution, and measurable business impact across every engagement."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <AnimatedSection 
                key={index} 
                className="text-center" 
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              <SmoothTextReveal text="Packages" />
            </h2>
            <SmoothTextReveal 
              text="Choose the package that fits your needs and goals."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className={`p-8 rounded-2xl border h-full transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-bg-tertiary border-text-primary border-2 shadow-lg' 
                      : 'bg-bg-tertiary border-border-light hover:border-border-medium shadow-sm hover:shadow-md'
                  }`}
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
                  {pkg.popular && (
                    <div className="bg-text-primary text-bg-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary mb-3">{pkg.name}</h3>
                  <p className="text-text-tertiary font-medium mb-4">{pkg.description}</p>
                  <p className="text-text-secondary mb-6 leading-relaxed">{pkg.subtitle}</p>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-text-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border-light">
                    <p className="text-text-tertiary text-sm font-medium mb-2">Best for:</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{pkg.bestFor}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-quaternary" data-nav-theme="accent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              <SmoothTextReveal text="Frequently asked questions" />
            </h2>
            <SmoothTextReveal 
              text="Common questions about our services, process, and approach to brand development."
              className="text-xl text-text-secondary"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-text-primary mb-4">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              <SmoothTextReveal text="Ready to get started?" className="text-text-primary" />
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <SmoothTextReveal 
              text="Let's discuss your project and explore how we can help accelerate your business growth through strategic brand development."
              className="text-xl text-text-secondary mb-12 leading-relaxed"
              delay={0.1}
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <Link to="/contact">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CleanButton className="px-8 py-4">
                  Start a Project
                </CleanButton>
                <CleanButton className="px-8 py-4">
                  Book a Discovery Call
                </CleanButton>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Services