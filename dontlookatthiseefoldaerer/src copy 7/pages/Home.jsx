import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SplashCursor } from '../components/ui/splash-cursor'
import { CleanButton } from '../components/ui/clean-button'
import AnimatedSection from '../components/ui/AnimatedSection'
import TextReveal from '../components/ui/TextReveal'
import { GlowCard } from '../components/ui/spotlight-card'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
} from '../components/ui/morphing-dialog'

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
      image: 'https://picsum.photos/400/300?random=10',
      caseStudyUrl: '#',
      details: 'Complete brand transformation for emerging fintech platform, resulting in 340% increase in user acquisition and $50M Series B funding. Our comprehensive strategy included market research, brand positioning, visual identity, and digital marketing campaigns.',
    },
    {
      quote: 'Working with TrendArt felt like having an extension of our own team. They understood our vision and brought creativity we never imagined possible.',
      author: 'Michael Rodriguez',
      role: 'CMO',
      company: 'Verde Wellness',
      image: 'https://picsum.photos/400/300?random=11',
      caseStudyUrl: '#',
      details: 'Integrated campaign strategy for wellness brand expansion into European markets, achieving 180% revenue growth in 12 months. We developed a localized approach that resonated with diverse European audiences.',
    },
    {
      quote: 'The attention to detail and strategic thinking TrendArt brings to every project is unmatched. They consistently exceed expectations.',
      author: 'Jessica Park',
      role: 'VP Marketing',
      company: 'TechCorp',
      image: 'https://picsum.photos/400/300?random=12',
      caseStudyUrl: '#',
      details: 'Enterprise platform redesign and development, improving user engagement by 65% and reducing support tickets by 40%. Our user-centered design approach transformed the entire user experience.',
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
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SplashCursor />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-none">
              <TextReveal text="We craft brands that matter" staggerDelay={0.05} />
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              <TextReveal text="Services that drive results" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic brand positioning to cutting-edge digital experiences, 
              we deliver comprehensive solutions that accelerate business growth.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <GlowCard 
                  customSize={true}
                  className="w-full h-80 bg-white/50"
                  glowColor="blue"
                >
                  <div className="flex flex-col justify-center items-center text-center h-full">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              <TextReveal text="Featured work" />
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
                    className="aspect-[4/3] mb-8 transition-opacity rounded-2xl overflow-hidden"
                    whileHover={{ opacity: 0.9 }}
                  >
                    <img 
                      src={`https://picsum.photos/400/300?random=${index + 1}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
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
              <MorphingDialog
                key={index}
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: "12px",
                  }}
                  className="text-center p-6 border border-gray-600 bg-gray-900/50 hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <MorphingDialogImage
                    src={testimonial.image}
                    alt={`${testimonial.author} from ${testimonial.company}`}
                    className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                  />
                  <blockquote className="text-xl leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <MorphingDialogTitle className="text-lg font-semibold text-white">
                      {testimonial.author}
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle className="text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </MorphingDialogSubtitle>
                  </div>
                  <div className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Click me • View Case Study
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: "24px",
                    }}
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-700 bg-gray-900 text-white sm:w-[500px]"
                  >
                    <MorphingDialogImage
                      src={testimonial.image}
                      alt={`${testimonial.author} from ${testimonial.company}`}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6">
                      <MorphingDialogTitle className="text-2xl text-white mb-2">
                        {testimonial.author}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-gray-400 mb-4">
                        {testimonial.role}, {testimonial.company}
                      </MorphingDialogSubtitle>
                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <blockquote className="text-lg italic mb-4 text-gray-300">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {testimonial.details}
                        </p>
                        <a
                          className="inline-flex text-blue-400 hover:text-blue-300 underline transition-colors"
                          href={testimonial.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Full Case Study →
                        </a>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="text-white" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
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