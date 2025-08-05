import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'digital', label: 'Digital' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'web', label: 'Web Development' },
  ]

  const portfolio = [
    {
      id: 1,
      title: 'Nexus Financial',
      category: 'Fintech Rebrand',
      type: 'branding',
      description: 'Complete brand transformation for emerging fintech platform, positioning them as a trusted leader in digital banking solutions.',
      metrics: ['340% user growth', '$50M Series B funding', '95% brand recognition'],
      services: ['Brand Strategy', 'Visual Identity', 'Digital Marketing'],
      year: '2023',
    },
    {
      id: 2,
      title: 'Verde Wellness',
      category: 'Global Expansion Campaign',
      type: 'campaigns',
      description: 'Integrated campaign strategy for wellness brand expansion into European markets, focusing on sustainable health solutions.',
      metrics: ['180% revenue growth', '5 new markets', '2M+ campaign reach'],
      services: ['Creative Campaigns', 'Digital Marketing', 'Brand Strategy'],
      year: '2023',
    },
    {
      id: 3,
      title: 'TechCorp Platform',
      category: 'Enterprise Web Development',
      type: 'web',
      description: 'Complete platform redesign and development for B2B software company, focusing on user experience and conversion optimization.',
      metrics: ['65% engagement increase', '40% fewer support tickets', '150% lead generation'],
      services: ['Web Development', 'UX Design', 'Digital Marketing'],
      year: '2022',
    },
    {
      id: 4,
      title: 'Urban Fashion Co.',
      category: 'Digital-First Campaign',
      type: 'digital',
      description: 'Viral social media campaign for sustainable fashion brand, leveraging influencer partnerships and user-generated content.',
      metrics: ['50M+ impressions', '300% social mentions', '85% sentiment positive'],
      services: ['Creative Campaigns', 'Digital Marketing', 'Social Media'],
      year: '2023',
    },
    {
      id: 5,
      title: 'Apex Manufacturing',
      category: 'Industrial Rebrand',
      type: 'branding',
      description: 'Modern rebrand for 50-year-old manufacturing company, bridging traditional expertise with innovative technology.',
      metrics: ['45% brand awareness lift', '60% website traffic increase', '25% new client acquisition'],
      services: ['Brand Strategy', 'Visual Identity', 'Web Development'],
      year: '2022',
    },
    {
      id: 6,
      title: 'Health Innovation Lab',
      category: 'Research Platform',
      type: 'web',
      description: 'Custom web platform for healthcare research organization, enabling collaboration between researchers and practitioners.',
      metrics: ['10,000+ active users', '40% faster research workflows', '95% user satisfaction'],
      services: ['Web Development', 'UX Design', 'Brand Strategy'],
      year: '2023',
    },
    {
      id: 7,
      title: 'Coastal Real Estate',
      category: 'Premium Property Campaign',
      type: 'campaigns',
      description: 'Luxury real estate marketing campaign targeting high-net-worth individuals, featuring immersive virtual experiences.',
      metrics: ['$250M in sales', '35% faster closing time', '90% client retention'],
      services: ['Creative Campaigns', 'Digital Marketing', 'Web Development'],
      year: '2022',
    },
    {
      id: 8,
      title: 'Future Mobility',
      category: 'EV Startup Brand',
      type: 'branding',
      description: 'Complete brand development for electric vehicle startup, creating a distinctive identity in the competitive EV market.',
      metrics: ['$100M funding round', '500% pre-order growth', '80% brand recall'],
      services: ['Brand Strategy', 'Visual Identity', 'Digital Marketing'],
      year: '2023',
    },
    {
      id: 9,
      title: 'Global Consulting Group',
      category: 'Digital Transformation',
      type: 'digital',
      description: 'Digital marketing transformation for international consulting firm, modernizing their approach to client acquisition.',
      metrics: ['200% qualified leads', '60% shorter sales cycle', '45% revenue increase'],
      services: ['Digital Marketing', 'Web Development', 'Brand Strategy'],
      year: '2022',
    },
    {
      id: 10,
      title: 'Artisan Coffee Co.',
      category: 'Retail Experience',
      type: 'campaigns',
      description: 'Omnichannel brand experience for specialty coffee retailer, connecting online and in-store customer journeys.',
      metrics: ['120% online sales growth', '40% customer lifetime value', '95% satisfaction score'],
      services: ['Creative Campaigns', 'Digital Marketing', 'Brand Strategy'],
      year: '2023',
    },
    {
      id: 11,
      title: 'Quantum Research Institute',
      category: 'Academic Platform',
      type: 'web',
      description: 'Advanced web platform for quantum computing research, facilitating collaboration and knowledge sharing.',
      metrics: ['50+ research institutions', '1000+ published papers', '30% faster collaboration'],
      services: ['Web Development', 'UX Design', 'Digital Marketing'],
      year: '2022',
    },
    {
      id: 12,
      title: 'Sustainable Energy Corp',
      category: 'Clean Energy Brand',
      type: 'digital',
      description: 'Digital brand strategy for renewable energy company, positioning them as leaders in sustainable technology.',
      metrics: ['300% investor interest', '150% partnership inquiries', '85% market awareness'],
      services: ['Digital Marketing', 'Brand Strategy', 'Web Development'],
      year: '2023',
    },
  ]

  const clients = [
    'Microsoft', 'Apple', 'Google', 'Amazon', 'Tesla', 'Netflix',
    'Adobe', 'Salesforce', 'Airbnb', 'Spotify', 'Uber', 'LinkedIn',
    'Meta', 'Twitter', 'Dropbox', 'Slack', 'Zoom', 'Shopify',
  ]

  const caseStudies = [
    {
      title: 'Nexus Financial: Fintech Transformation',
      subtitle: 'How strategic rebranding accelerated Series B funding',
      challenge: 'Nexus Financial was struggling to differentiate in the crowded fintech space. Their existing brand lacked credibility and failed to communicate their innovative approach to digital banking.',
      solution: 'We developed a comprehensive brand strategy focused on trust and innovation, creating a visual identity that balanced professionalism with approachability. The rebrand included new messaging, website, and go-to-market strategy.',
      results: [
        '340% increase in user acquisition',
        '$50M Series B funding secured',
        '95% improvement in brand recognition',
        '60% increase in investor interest',
      ],
      testimonial: {
        quote: 'TrendArt didn\'t just redesign our brand – they transformed how our market perceives us. The strategic insights were game-changing.',
        author: 'Sarah Chen, CEO',
      },
    },
    {
      title: 'Verde Wellness: European Expansion',
      subtitle: 'Scaling a wellness brand across international markets',
      challenge: 'Verde Wellness needed to expand from the US market into 5 European countries, each with different cultural attitudes toward wellness and sustainability.',
      solution: 'Our team conducted extensive market research and developed localized campaigns for each market while maintaining brand consistency. We created culturally-sensitive messaging and partnerships with local influencers.',
      results: [
        '180% revenue growth in 12 months',
        'Successful launch in 5 European markets',
        '2M+ people reached through campaigns',
        '75% brand awareness in target markets',
      ],
      testimonial: {
        quote: 'The cultural intelligence TrendArt brought to our expansion was invaluable. They made complex market entry feel seamless.',
        author: 'Michael Rodriguez, CMO',
      },
    },
    {
      title: 'TechCorp Platform: UX Revolution',
      subtitle: 'Transforming enterprise software user experience',
      challenge: 'TechCorp\'s platform suffered from poor user adoption and high support ticket volume. The interface was complex and unintuitive, hindering business growth.',
      solution: 'We redesigned the entire user experience from the ground up, conducting extensive user research and implementing modern design patterns. The new platform prioritized usability and efficiency.',
      results: [
        '65% improvement in user engagement',
        '40% reduction in support tickets',
        '150% increase in lead generation',
        '90% user satisfaction score',
      ],
      testimonial: {
        quote: 'Our platform went from being a barrier to growth to our biggest competitive advantage. The transformation exceeded all expectations.',
        author: 'Jessica Park, VP of Product',
      },
    },
  ]

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter(project => project.type === activeFilter)

  return (
    <div>
      <section className="h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
              Work that drives<br />
              measurable impact
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="A showcase of strategic thinking, creative execution, and business results across diverse industries and market challenges."
              className="text-xl text-gray-600 leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter, index) => (
                <motion.div
                  key={filter.id}
                  initial={{ opacity: 0, y: 20 }}
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
                  <CleanButton
                    onClick={() => setActiveFilter(filter.id)}
                    text={filter.label.split(' ')[0]}
                    className="w-auto px-6"
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="aspect-[4/3] mb-6 rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: `url(https://picsum.photos/600/450?random=${index + 40})`,
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
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-xl font-semibold text-black group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-black">Key Results:</div>
                      <div className="text-sm text-gray-600">
                        {project.metrics.join(' • ')}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <motion.span
                          key={serviceIndex}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
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
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Trusted by industry leaders
            </h2>
            <SmoothTextReveal 
              text="We've had the privilege of partnering with innovative companies across various industries and stages of growth."
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <motion.div
                  className="flex items-center justify-center h-16 text-gray-400 font-medium hover:text-black transition-colors"
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

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Case studies
            </h2>
            <SmoothTextReveal 
              text="Deep dives into our most impactful projects, showcasing the strategic process and measurable outcomes that define our approach."
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.2} direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="order-2 lg:order-1">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-2">{study.title}</h3>
                        <p className="text-lg text-gray-600">{study.subtitle}</p>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: 0.2
                          }
                        }}
                      >
                        <h4 className="font-semibold text-black mb-3">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: 0.4
                          }
                        }}
                      >
                        <h4 className="font-semibold text-black mb-3">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: 0.6
                          }
                        }}
                      >
                        <h4 className="font-semibold text-black mb-3">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <motion.div 
                              key={resultIndex} 
                              className="text-gray-600 font-medium"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ 
                                opacity: 1, 
                                scale: 1,
                                transition: { 
                                  type: "spring", 
                                  stiffness: 300, 
                                  damping: 20,
                                  delay: resultIndex * 0.1 + 0.8
                                }
                              }}
                            >
                              {result}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.blockquote 
                        className="border-l-4 border-black pl-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: 1.0
                          }
                        }}
                      >
                        <p className="text-lg italic text-gray-700 mb-4">
                          "{study.testimonial.quote}"
                        </p>
                        <cite className="text-sm font-medium text-black">
                          — {study.testimonial.author}
                        </cite>
                      </motion.blockquote>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <motion.div 
                      className="aspect-[4/3] lg:sticky lg:top-32 rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `url(https://picsum.photos/600/450?random=${index + 60})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Let's create something exceptional
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Ready to see your brand achieve similar results? Let's discuss how we can help accelerate your business growth through strategic brand development."
              className="text-xl text-gray-600 mb-12 leading-relaxed"
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