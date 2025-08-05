import { motion } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const About = () => {
  const whatWeDo = {
    title: 'What We Do',
    description: 'We help brands cut through the noise and make things people care about, with strategy, design, content, and marketing that\'s clear, intentional, and built to perform.',
    details: 'Whether you\'re a startup, a clinic, a restaurant, or a B2B brand trying to scale, we build the tools that make your brand easier to understand, easier to love, and harder to ignore.'
  }

  const whatMakesUsDifferent = [
    'We actually know marketing — not just design.',
    'We lead with clarity — so you\'re never guessing what we\'re doing or why.',
    'We stay small on purpose — so you always work with people who care.',
    'We think regionally — built in the UAE, shaped by the culture around us.'
  ]

  const values = [
    {
      title: 'Strategic Thinking',
      description: 'You\'re not hiring us to guess. Every move we make is grounded in strategy, so your brand doesn\'t just look good, it\'s built to work.',
    },
    {
      title: 'Collaborative Partnership',
      description: 'We don\'t disappear into a process. You\'ll always know what we\'re doing, why we\'re doing it, and how it connects to your goals.',
    },
    {
      title: 'Relentless Craft',
      description: 'Your audience notices the details, so do we. From the first moodboard to the final asset, we obsess over getting it right.',
    },
    {
      title: 'Measured Impact',
      description: 'This isn\'t about "nice to have" content. We track what works, learn what doesn\'t, and focus on what actually drives results.',
    },
    {
      title: 'Authentic Innovation',
      description: 'We explore bold ideas, without losing who you are. Creativity should amplify your brand, not distract from it.',
    },
    {
      title: 'Built-In Focus',
      description: 'You work directly with people who know the work. No fluff, no hand-offs, no lost context, just clear thinking and sharp execution.',
    },
    {
      title: 'Long-Term Vision',
      description: 'Trends fade. We help you build a brand that lasts, with systems, stories, and strategy that still make sense tomorrow.',
    },
  ]


  return (
    <div className="bg-bg-primary">
      <section className="min-h-[60vh] flex items-center justify-center px-6 lg:px-8" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-8">
              Built in Abu Dhabi.<br />
              Wired for what's next.
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="We're not another agency chasing trends, we're the ones shaping what people remember."
              className="text-xl text-text-secondary leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl font-bold text-text-primary mb-8">The Problem We Saw</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Too many brands were stuck in the same loop: flashy visuals, no real strategy, and disappointing results.
                </p>
                <p>
                  And too many "agencies" were just designers with no marketing backbone, selling surface when what brands needed was substance.
                </p>
                <p>
                  We started TrendArt to be the agency we couldn't find: one that blends clarity and creativity, thinks in strategy and storytelling, and treats every brand like it actually matters.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div 
                className="aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(https://picsum.photos/600/800?random=70)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl font-bold text-text-primary mb-8">{whatWeDo.title}</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>{whatWeDo.description}</p>
                <p>{whatWeDo.details}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(https://picsum.photos/600/450?random=101)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(https://picsum.photos/600/450?random=102)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-4xl font-bold text-text-primary mb-8">What Makes Us Different</h2>
              <div className="space-y-4">
                {whatMakesUsDifferent.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        delay: index * 0.1 + 0.3
                      }
                    }}
                  >
                    <div className="w-2 h-2 bg-text-accent rounded-full mt-3 flex-shrink-0" />
                    <p className="text-lg text-text-secondary leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-quaternary" data-nav-theme="accent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              How We Work
            </h2>
            <SmoothTextReveal 
              text="These are the principles that shape every project we take on, not just what we believe, but how we help you win."
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(https://picsum.photos/600/450?random=95)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-4xl font-bold text-text-primary mb-8">What It's Like to Work With Us</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  No confusion. No inflated decks. No disappearing after the contract is signed.
                </p>
                <p>
                  We keep it simple: understand your brand → build the right things → deliver results.
                </p>
                <p>
                  That's it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-quaternary" data-nav-theme="accent">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              Ready to start something that actually works?
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CleanButton className="px-8 py-4">
                Start a Project
              </CleanButton>
              <CleanButton className="px-8 py-4">
                See Our Work
              </CleanButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default About