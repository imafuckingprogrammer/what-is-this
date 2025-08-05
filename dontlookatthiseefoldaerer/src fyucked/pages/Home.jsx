import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CleanButton } from '../components/ui/clean-button'
import { AnimatedText } from '../components/ui/animated-text'
import { useState } from 'react'

const Home = () => {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Make your brand make sense.',
      details: 'Brand positioning, messaging strategy, visual identity systems that connect with your audience and drive business results.',
    },
    {
      title: 'Digital Experiences',
      description: 'Your digital presence, designed to perform.',
      details: 'Custom websites, mobile experiences, and digital platforms built for conversion and user engagement.',
    },
    {
      title: 'Creative Campaigns',
      description: 'Content that moves people.',
      details: 'Strategic creative campaigns, content production, and brand storytelling that cuts through the noise.',
    },
  ]

  const work = [
    {
      title: 'Nexus Financial',
      category: 'Fintech Transformation',
      year: '2024',
      result: '340% user growth'
    },
    {
      title: 'Verde Wellness',
      category: 'Global Expansion',
      year: '2024',
      result: '5 new markets'
    },
    {
      title: 'TechCorp Platform',
      category: 'UX Revolution',
      year: '2023',
      result: '65% engagement lift'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div className="max-w-6xl text-center">
            <AnimatedText variant="slideUp" delay={0}>
              <h1 className="text-balance mb-8">
                In a world of noise, we shape what people remember.
              </h1>
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.2}>
              <p className="text-large mb-16 max-w-4xl mx-auto text-gray-600">
                Smart strategies. Clean design. Content that moves.
              </p>
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <CleanButton text="Start Project" />
                </Link>
                <Link to="/work">
                  <CleanButton text="View Work" className="bg-transparent border-black text-black hover:bg-black hover:text-white" />
                </Link>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedText variant="slideUp">
              <h2 className="text-center mb-20">What we do</h2>
            </AnimatedText>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full text-left group"
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                  >
                    <div className="flex items-center justify-between py-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <motion.div
                        className="w-6 h-6 flex items-center justify-center"
                        animate={{ rotate: expandedService === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-4 h-0.5 bg-black absolute" />
                        <div className="w-0.5 h-4 bg-black absolute" />
                      </motion.div>
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedService === index ? 'auto' : 0,
                      opacity: expandedService === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-gray-600 leading-relaxed max-w-3xl">
                        {service.details}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/services">
                <CleanButton text="All Services" className="bg-transparent border-black text-black hover:bg-black hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedText variant="slideUp">
              <div className="mb-20">
                <h2 className="mb-6">Selected work</h2>
                <p className="text-large text-gray-600 max-w-2xl">
                  Recent projects showcasing strategic thinking and measurable impact.
                </p>
              </div>
            </AnimatedText>

            <div className="space-y-12">
              {work.map((project, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => window.location.href = '/work'}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between py-8 border-b border-gray-100 last:border-b-0">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.category}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-8">
                      <span className="text-sm font-medium text-gray-900">{project.result}</span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/work">
                <CleanButton text="View All Work" className="bg-transparent border-black text-black hover:bg-black hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why TrendArt */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedText variant="slideUp">
              <h2 className="text-center mb-16">
                Real marketers. Not just button-pushers.
              </h2>
            </AnimatedText>
            
            <AnimatedText variant="slideUp" delay={0.2}>
              <div className="space-y-8 text-center mb-16">
                <p className="text-large text-gray-600 leading-relaxed">
                  Too many "agencies" are just designers with a logo. They make things look good, 
                  but don't know how to make them work. That's why brands end up with flashy content, 
                  weak messaging, and no real results.
                </p>
                <p className="text-large font-medium text-black">
                  We're here to change that.
                </p>
                <p className="text-large text-gray-600 leading-relaxed">
                  At TrendArt, strategy comes first. We position brands, build campaigns that convert, 
                  and create content that connects. Every visual has a purpose. Every decision is backed by thinking.
                </p>
              </div>
            </AnimatedText>

            <div className="text-center">
              <Link to="/contact">
                <CleanButton text="Start a Project" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

export default Home