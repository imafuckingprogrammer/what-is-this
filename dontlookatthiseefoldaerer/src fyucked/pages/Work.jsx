import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import { AnimatedText } from '../components/ui/animated-text'
import { useState } from 'react'

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const caseStudies = [
    {
      id: 1,
      title: 'Nexus Financial',
      subtitle: 'Fintech Transformation',
      category: 'Fintech',
      year: '2024',
      description: 'Complete rebrand and digital transformation for emerging fintech platform',
      challenge: 'Nexus Financial was struggling to differentiate in the crowded fintech space. Their existing brand lacked credibility and failed to communicate their innovative approach to digital banking.',
      solution: 'We developed a comprehensive brand strategy focused on trust and innovation, creating a visual identity that balanced professionalism with approachability.',
      results: [
        '340% increase in user acquisition',
        '$50M Series B funding secured',
        '95% improvement in brand recognition',
        '60% increase in investor interest'
      ],
      services: ['Brand Strategy', 'Visual Identity', 'Digital Marketing', 'Web Development'],
      image: 'https://picsum.photos/800/600?random=1',
      testimonial: {
        quote: "TrendArt didn't just redesign our brand – they transformed how our market perceives us.",
        author: 'Sarah Chen, CEO'
      }
    },
    {
      id: 2,
      title: 'Verde Wellness',
      subtitle: 'Global Expansion Campaign',
      category: 'Healthcare',
      year: '2024',
      description: 'Integrated campaign strategy for wellness brand expansion into European markets',
      challenge: 'Verde Wellness needed to expand from the US market into 5 European countries, each with different cultural attitudes toward wellness and sustainability.',
      solution: 'Our team conducted extensive market research and developed localized campaigns for each market while maintaining brand consistency.',
      results: [
        '180% revenue growth in 12 months',
        'Successful launch in 5 European markets',
        '2M+ people reached through campaigns',
        '75% brand awareness in target markets'
      ],
      services: ['Market Research', 'Content Strategy', 'Digital Campaigns', 'Social Media'],
      image: 'https://picsum.photos/800/600?random=2',
      testimonial: {
        quote: "The cultural intelligence TrendArt brought to our expansion was invaluable.",
        author: 'Michael Rodriguez, CMO'
      }
    },
    {
      id: 3,
      title: 'TechCorp Platform',
      subtitle: 'UX Revolution',
      category: 'B2B SaaS',
      year: '2023',
      description: 'Complete platform redesign and development for B2B software company',
      challenge: 'TechCorp\'s platform suffered from poor user adoption and high support ticket volume. The interface was complex and unintuitive.',
      solution: 'We redesigned the entire user experience from the ground up, conducting extensive user research and implementing modern design patterns.',
      results: [
        '65% improvement in user engagement',
        '40% reduction in support tickets',
        '150% increase in lead generation',
        '90% user satisfaction score'
      ],
      services: ['UX Research', 'UI Design', 'Frontend Development', 'User Testing'],
      image: 'https://picsum.photos/800/600?random=3',
      testimonial: {
        quote: "Our platform went from being a barrier to growth to our biggest competitive advantage.",
        author: 'Jessica Park, VP of Product'
      }
    },
    {
      id: 4,
      title: 'Apex Manufacturing',
      subtitle: 'Industrial Renaissance',
      category: 'Manufacturing',
      year: '2023',
      description: 'Modern rebrand for 50-year-old manufacturing company bridging tradition with innovation',
      challenge: 'Apex Manufacturing had strong industry reputation but outdated brand perception that didn\'t reflect their technological capabilities.',
      solution: 'We created a brand identity that honored their heritage while showcasing their modern capabilities and forward-thinking approach.',
      results: [
        '45% brand awareness lift',
        '60% website traffic increase',
        '25% new client acquisition',
        '30% improvement in talent recruitment'
      ],
      services: ['Brand Strategy', 'Visual Identity', 'Web Development', 'Content Creation'],
      image: 'https://picsum.photos/800/600?random=4',
      testimonial: {
        quote: "TrendArt helped us show the market who we really are today, not who we were 20 years ago.",
        author: 'David Kim, CEO'
      }
    },
    {
      id: 5,
      title: 'Luna Beauty',
      subtitle: 'Digital-First Beauty Brand',
      category: 'Beauty & Cosmetics',
      year: '2024',
      description: 'Complete brand development and digital strategy for sustainable beauty startup',
      challenge: 'Breaking into the saturated beauty market with a new brand focused on sustainability and inclusivity.',
      solution: 'We developed a distinctive brand identity and content strategy that authentically communicated their values and connected with their target audience.',
      results: [
        '1M+ social media followers',
        '$2M in first-year revenue',
        '85% customer retention rate',
        '50+ retail partnerships secured'
      ],
      services: ['Brand Development', 'Content Strategy', 'Social Media', 'Influencer Marketing'],
      image: 'https://picsum.photos/800/600?random=5',
      testimonial: {
        quote: "They didn't just build our brand, they built our entire go-to-market strategy.",
        author: 'Priya Patel, Founder'
      }
    },
    {
      id: 6,
      title: 'Future Mobility',
      subtitle: 'EV Startup Branding',
      category: 'Automotive',
      year: '2023',
      description: 'Complete brand development for electric vehicle startup creating distinctive market position',
      challenge: 'Standing out in the competitive EV market while communicating complex technology in an accessible way.',
      solution: 'We created a brand that emphasized both innovation and reliability, with clear communication of their unique value proposition.',
      results: [
        '$100M funding round completed',
        '500% pre-order growth',
        '80% brand recall in target market',
        'Featured in major automotive publications'
      ],
      services: ['Brand Strategy', 'Visual Identity', 'Digital Marketing', 'PR Strategy'],
      image: 'https://picsum.photos/800/600?random=6',
      testimonial: {
        quote: "TrendArt gave us the credibility we needed to compete with established players.",
        author: 'Elena Rodriguez, CMO'
      }
    }
  ]

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {/* Floating Image Preview */}
      {hoveredImage && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 100,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl border-2 border-white">
            <img 
              src={hoveredImage} 
              alt="Project preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <div className="max-w-4xl text-center mx-auto">
            <motion.h1 
              className="text-balance mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Work that drives measurable impact
            </motion.h1>
            <motion.p 
              className="text-xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              A showcase of strategic thinking, creative execution, and business results 
              across diverse industries and market challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 6).map((study, index) => (
              <motion.div
                key={study.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredImage(study.image)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {study.category} • {study.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      {study.results[0]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Featured Case Studies
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Deep dives into our most impactful projects, showcasing the strategic process 
              and measurable outcomes that define our approach.
            </motion.p>
          </div>

          <div className="space-y-32">
            {caseStudies.slice(0, 3).map((study, index) => (
              <motion.div
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="space-y-8">
                    <div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">
                          {study.category} • {study.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                      <p className="text-xl text-gray-600">{study.subtitle}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Solution</h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="font-semibold text-lg text-gray-900">
                              {result.split(' ')[0]}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-gray-900 pl-6">
                      <p className="text-lg italic text-gray-700 mb-4">"{study.testimonial.quote}"</p>
                      <cite className="text-sm font-medium text-gray-900">
                        — {study.testimonial.author}
                      </cite>
                    </blockquote>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] lg:sticky lg:top-32 rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container text-center">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's create something exceptional
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to see your brand achieve similar results? Let's discuss how we can 
            help accelerate your business growth through strategic brand development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02]"
            >
              Start a Project
              <motion.svg 
                className="ml-2 w-4 h-4"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Work