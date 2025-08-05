import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SplashCursor } from '../components/ui/splash-cursor'
import { CleanButton } from '../components/ui/clean-button'
import AnimatedSection from '../components/ui/AnimatedSection'
import TextReveal from '../components/ui/TextReveal'

const Home = () => {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand positioning, identity development, and strategic framework to differentiate your company in competitive markets.',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven campaigns across all digital channels, optimized for engagement, conversion, and measurable business growth.',
    },
    {
      title: 'Creative Campaigns',
      description: 'Award-winning creative concepts that capture attention, communicate value, and drive authentic customer connections.',
    },
    {
      title: 'Web Development',
      description: 'High-performance websites and applications built with modern technologies, focusing on user experience and business results.',
    },
  ]

  const featuredWork = [
    {
      title: 'Nexus Financial',
      category: 'Fintech Rebrand',
      description: 'Complete brand transformation for emerging fintech platform, resulting in 340% increase in user acquisition and $50M Series B funding.',
      metrics: '340% user growth, $50M funding',
    },
    {
      title: 'Verde Wellness',
      category: 'Digital Campaign',
      description: 'Integrated campaign strategy for wellness brand expansion into European markets, achieving 180% revenue growth in 12 months.',
      metrics: '180% revenue growth, 5 new markets',
    },
    {
      title: 'TechCorp Platform',
      category: 'Web Development',
      description: 'Enterprise platform redesign and development, improving user engagement by 65% and reducing support tickets by 40%.',
      metrics: '65% engagement, 40% fewer tickets',
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

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Retention' },
    { number: '8', label: 'Years Experience' },
    { number: '$2.4B', label: 'Client Revenue Generated' },
  ]

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SplashCursor />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              We craft brands that matter
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              TrendArt partners with forward-thinking companies to create exceptional brand experiences 
              that drive growth and forge lasting customer connections.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.8}>
            <Link to="/contact">
              <CleanButton 
                text="Start" 
                className="w-40"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Services that drive results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic brand positioning to cutting-edge digital experiences, 
              we deliver comprehensive solutions that accelerate business growth.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  <div className="bg-white p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Featured work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of our most impactful projects, showcasing the strategic thinking 
              and creative execution that delivers measurable business outcomes.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {featuredWork.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  <motion.div 
                    className="bg-gray-200 aspect-[4/3] mb-8 transition-opacity rounded-2xl"
                    whileHover={{ opacity: 0.9 }}
                  ></motion.div>
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-semibold text-black group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-sm font-medium text-black">
                      {project.metrics}
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

      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What our clients say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <blockquote className="text-xl leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">{testimonial.author}</div>
                  <div className="text-gray-300">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how TrendArt can help accelerate your business growth 
            through strategic brand development and innovative digital experiences.
          </p>
          <Link to="/contact">
            <CleanButton 
              text="Begin" 
              className="w-40"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home