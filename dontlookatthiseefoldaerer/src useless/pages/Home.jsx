import { Link } from 'react-router-dom'

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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center container-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-neutral-900 mb-8 leading-[0.9] tracking-tight text-balance">
            We craft brands<br />
            that <span className="font-display italic font-normal">matter</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            TrendArt partners with forward-thinking companies to create exceptional brand experiences 
            that drive growth and forge lasting customer connections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-primary text-base px-12 py-5">
              Start Your Project
            </Link>
            <Link to="/work" className="btn-secondary text-base px-12 py-5">
              View Our Work
            </Link>
          </div>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neutral-100 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-neutral-100 to-transparent rounded-full blur-3xl opacity-30" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
              Services that drive results
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light">
              From strategic brand positioning to cutting-edge digital experiences, 
              we deliver comprehensive solutions that accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-10 lg:p-12 h-full shadow-soft hover:shadow-refined transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight group-hover:text-neutral-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
              Featured work
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light">
              A selection of our most impactful projects, showcasing the strategic thinking 
              and creative execution that delivers measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {featuredWork.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-[4/3] mb-8 hover:from-neutral-200 hover:to-neutral-300 transition-all duration-500"></div>
                <div className="space-y-5">
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="text-base font-medium text-neutral-900 pt-2">
                    {project.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/work" className="btn-secondary text-base px-12 py-5">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              What our clients say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <blockquote className="text-2xl leading-relaxed mb-10 font-display italic font-normal">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-3">
                  <div className="text-xl font-semibold">{testimonial.author}</div>
                  <div className="text-neutral-400 font-medium">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-neutral-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium text-lg tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="max-w-5xl mx-auto text-center container-padding">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
            Ready to start your project?
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
            Let's discuss how TrendArt can help accelerate your business growth 
            through strategic brand development and innovative digital experiences.
          </p>
          <Link to="/contact" className="btn-primary text-base px-12 py-5">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home