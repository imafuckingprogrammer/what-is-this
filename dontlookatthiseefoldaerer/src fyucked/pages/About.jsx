import { Link } from 'react-router-dom'

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Leading strategic design initiatives with 10+ years of experience.',
    },
    {
      name: 'Marcus Kim',
      role: 'Strategy Lead',
      bio: 'Focused on brand positioning and market analysis.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Design Director',
      bio: 'Creating cohesive visual systems and brand experiences.',
    },
  ]

  const values = [
    {
      title: 'Purpose-driven',
      description: 'Every project serves a clear business objective and strategic purpose.',
    },
    {
      title: 'Collaborative',
      description: 'We work closely with clients as partners in achieving their goals.',
    },
    {
      title: 'Quality-focused',
      description: 'Attention to detail and craft in everything we create.',
    },
  ]

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="container">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-balance mb-8">
              Built in Abu Dhabi. Wired for what's next.
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              We're not another agency chasing trends, we're the ones shaping what people remember.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">The Problem We Saw</h2>
            <div className="space-y-6 text-lg">
              <p>
                Too many brands were stuck in the same loop: flashy visuals, no real strategy, and 
                disappointing results.
              </p>
              <p>
                And too many "agencies" were just designers with no marketing backbone, selling surface 
                when what brands needed was substance.
              </p>
              <p className="font-medium">
                We started TrendArt to be the agency we couldn't find: one that blends clarity and creativity, 
                thinks in strategy and storytelling, and treats every brand like it actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="mb-8">What We Do</h2>
              <p className="text-lg mb-8">
                We help brands cut through the noise and make things people care about, with strategy, 
                design, content, and marketing that's clear, intentional, and built to perform.
              </p>
              <p className="text-lg">
                Whether you're a startup, a clinic, a restaurant, or a B2B brand trying to scale, 
                we build the tools that make your brand easier to understand, easier to love, and harder to ignore.
              </p>
            </div>
            <div>
              <h3 className="mb-8">What Makes Us Different</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">We actually know marketing</p>
                    <p className="text-gray-600">not just design.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">We lead with clarity</p>
                    <p className="text-gray-600">so you're never guessing what we're doing or why.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">We stay small on purpose</p>
                    <p className="text-gray-600">so you always work with people who care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">We think regionally</p>
                    <p className="text-gray-600">built in the UAE, shaped by the culture around us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">What It's Like to Work With Us</h2>
            <p className="text-lg mb-8">
              No confusion. No inflated decks. No disappearing after the contract is signed.
            </p>
            <p className="text-lg font-medium">
              We keep it simple: understand your brand → build the right things → deliver results.
            </p>
            <p className="text-lg mt-6">
              That's it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container text-center">
          <h2 className="mb-6">Ready to start something that actually works?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
            >
              Start a Project
            </Link>
            <Link 
              to="/work"
              className="group inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-[1.02]"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About