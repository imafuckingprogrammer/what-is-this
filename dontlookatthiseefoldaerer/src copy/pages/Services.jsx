import { Link } from 'react-router-dom'
import { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)

  const services = [
    {
      title: 'Brand Strategy',
      subtitle: 'Foundation for growth',
      description: 'Comprehensive brand positioning and strategic framework development that differentiates your company in competitive markets.',
      features: [
        'Market research and competitive analysis',
        'Brand positioning and messaging framework',
        'Target audience definition and personas',
        'Brand architecture and portfolio strategy',
        'Go-to-market strategy development',
        'Brand guidelines and implementation roadmap',
      ],
      caseStudy: {
        client: 'Nexus Financial',
        result: 'Repositioned fintech startup, resulting in 340% user growth and $50M Series B funding.',
      },
    },
    {
      title: 'Visual Identity',
      subtitle: 'Distinctive brand presence',
      description: 'Complete visual identity systems that capture brand essence and create memorable customer touchpoints.',
      features: [
        'Logo design and brand mark development',
        'Typography and color palette selection',
        'Visual style guide and design system',
        'Brand applications across all touchpoints',
        'Packaging and collateral design',
        'Digital asset library creation',
      ],
      caseStudy: {
        client: 'Verde Wellness',
        result: 'New identity system increased brand recognition by 85% and supported expansion into 5 European markets.',
      },
    },
    {
      title: 'Digital Marketing',
      subtitle: 'Data-driven growth',
      description: 'Strategic digital campaigns that drive engagement, conversion, and measurable business growth across all channels.',
      features: [
        'Multi-channel campaign strategy',
        'Content marketing and social media',
        'Search engine optimization (SEO)',
        'Pay-per-click advertising (PPC)',
        'Email marketing automation',
        'Performance tracking and optimization',
      ],
      caseStudy: {
        client: 'TechCorp Platform',
        result: 'Integrated campaign generated 280% increase in qualified leads and 40% improvement in conversion rate.',
      },
    },
    {
      title: 'Web Development',
      subtitle: 'Performance-focused experiences',
      description: 'High-performance websites and applications built with modern technologies, optimized for user experience and business results.',
      features: [
        'Custom website design and development',
        'E-commerce platform development',
        'Content management system (CMS)',
        'Mobile-responsive design',
        'Performance optimization',
        'Analytics and conversion tracking',
      ],
      caseStudy: {
        client: 'Retail Innovation Co.',
        result: 'New e-commerce platform increased online sales by 150% and reduced bounce rate by 35%.',
      },
    },
    {
      title: 'Creative Campaigns',
      subtitle: 'Memorable brand moments',
      description: 'Award-winning creative concepts that capture attention, communicate value, and drive authentic customer connections.',
      features: [
        'Creative concept development',
        'Multi-channel campaign execution',
        'Video and motion graphics production',
        'Print and outdoor advertising',
        'Event and experiential marketing',
        'Influencer partnership strategies',
      ],
      caseStudy: {
        client: 'Urban Fashion Brand',
        result: 'Viral campaign reached 50M+ impressions and drove 300% increase in brand mentions across social media.',
      },
    },
    {
      title: 'Brand Consulting',
      subtitle: 'Strategic guidance',
      description: 'Expert consulting and strategic guidance for complex brand challenges and organizational transformations.',
      features: [
        'Brand audit and assessment',
        'Strategic planning workshops',
        'Organizational brand alignment',
        'Merger and acquisition brand strategy',
        'Crisis communication planning',
        'Executive leadership coaching',
      ],
      caseStudy: {
        client: 'Global Manufacturing Inc.',
        result: 'Post-merger brand consolidation strategy unified 3 legacy brands and improved customer clarity by 60%.',
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

  const pricingTiers = [
    {
      name: 'Essentials',
      price: '$15,000',
      period: 'Starting at',
      description: 'Perfect for startups and small businesses looking to establish a professional brand presence.',
      features: [
        'Brand strategy foundation',
        'Logo and visual identity',
        'Brand guidelines',
        'Business card and letterhead design',
        '3 rounds of revisions',
        '8-week timeline',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$35,000',
      period: 'Starting at',
      description: 'Comprehensive branding solution for growing companies ready to scale their market presence.',
      features: [
        'Complete brand strategy',
        'Visual identity system',
        'Website design and development',
        'Marketing collateral suite',
        'Digital marketing setup',
        'Unlimited revisions',
        '12-week timeline',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'Tailored solutions for large organizations requiring comprehensive brand transformation.',
      features: [
        'Multi-brand strategy',
        'Global brand implementation',
        'Advanced digital solutions',
        'Ongoing support and consultation',
        'Dedicated account management',
        'Custom timeline and scope',
      ],
      cta: 'Contact Us',
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
    <div>
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Services that drive<br />
            real business results
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From strategic brand positioning to cutting-edge digital experiences, 
            we deliver comprehensive solutions that accelerate growth and create lasting value.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32">
                <nav className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-4 transition-all ${
                        activeService === index
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold">{service.title}</div>
                      <div className="text-sm opacity-80">{service.subtitle}</div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {services[activeService].title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-4">What's included:</h3>
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Case study:</h3>
                    <div className="bg-gray-50 p-6">
                      <div className="font-medium text-black mb-2">
                        {services[activeService].caseStudy.client}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {services[activeService].caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-block bg-black text-white px-8 py-3 font-medium hover:opacity-90 hover:scale-105"
                >
                  Start This Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures strategic alignment, exceptional execution, 
              and measurable business impact across every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Pricing packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for every stage of business growth. 
              All packages can be customized to meet your specific needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 hover:shadow-lg hover:translate-y-[-4px] transition-all ${
                  tier.popular ? 'ring-2 ring-black' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-black text-white text-sm font-medium px-4 py-2 inline-block mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-black">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 font-medium transition-all ${
                    tier.popular
                      ? 'bg-black text-white hover:opacity-90'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services, process, and approach to brand development.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black pr-8">{faq.question}</h3>
                    <div className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss your project and explore how TrendArt can help 
            accelerate your business growth through strategic brand development.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-12 py-4 text-lg font-medium hover:opacity-90 hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services