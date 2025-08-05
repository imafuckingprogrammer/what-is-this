import { Link } from 'react-router-dom'

const Services = () =>

 {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'Strategic positioning and messaging that differentiates your company in the market.',
      approach: 'We start with research and competitive analysis to develop a clear brand strategy.',
    },
    {
      title: 'Visual Identity',
      description: 'Cohesive visual systems that express your brand across all touchpoints.',
      approach: 'From logo design to complete brand guidelines, we create distinctive visual identities.',
    },
    {
      title: 'Digital Experiences',
      description: 'Websites and digital products that connect with your audience and drive results.',
      approach: 'User-centered design combined with modern development practices.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business goals, challenges, and market position.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing a clear strategic framework and creative direction.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Creating and delivering the work with attention to detail and craft.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Supporting implementation and measuring results.',
    },
  ]



  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-balance mb-8">
              Strategic design services for meaningful brands
            </h1>
            <p className="text-xl mb-12 max-w-2xl">
              We help companies create cohesive brand experiences through 
              strategic thinking and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="mb-6">What we do</h2>
            <p className="text-xl max-w-2xl">
              Our services are designed to work together, creating cohesive brand experiences.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="mb-4">{service.title}</h3>
                  <p className="mb-6">{service.description}</p>
                  <p className="text-gray-600">{service.approach}</p>
                </div>
                <div className="md:order-first">
                  <div className="aspect-[4/3] bg-gray-200 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mb-16">
            <h2 className="mb-6">How we work</h2>
            <p className="text-xl max-w-2xl">
              Our process is collaborative and iterative, ensuring the final result 
              serves your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="text-sm font-medium text-gray-500">{step.step}</div>
                <h3>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <h2 className="mb-6">Ready to start a project?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help you create a more effective brand experience.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-none hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services