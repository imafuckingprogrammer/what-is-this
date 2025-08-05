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
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-none">
            We craft brands<br />
            that <span className="italic">matter</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            TrendArt partners with forward-thinking companies to create exceptional brand experiences 
            that drive growth and forge lasting customer connections.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-12 py-4 text-lg font-medium hover:opacity-90 hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Services that drive results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic brand positioning to cutting-edge digital experiences, 
              we deliver comprehensive solutions that accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 h-full hover:shadow-lg hover:translate-y-[-4px] transition-all">
                  <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of our most impactful projects, showcasing the strategic thinking 
              and creative execution that delivers measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {featuredWork.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-200 aspect-[4/3] mb-8 hover:opacity-90 transition-opacity"></div>
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
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/work"
              className="inline-block border-2 border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-all"
            >
              View All Work
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
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-12 py-4 text-lg font-medium hover:opacity-90 hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home