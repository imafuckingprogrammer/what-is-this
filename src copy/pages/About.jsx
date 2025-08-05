import { motion } from 'framer-motion'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const About = () => {
  const team = [
    {
      name: 'Elena Vasquez',
      role: 'Creative Director & Founder',
      bio: 'Elena founded TrendArt in 2016 with a vision to bridge the gap between strategic thinking and exceptional design. Previously at Pentagram and IDEO, she brings 12 years of experience crafting brands for Fortune 500 companies.',
    },
    {
      name: 'Marcus Chen',
      role: 'Strategy Lead',
      bio: 'Marcus leads our strategic initiatives, combining data-driven insights with creative intuition. Former McKinsey consultant turned brand strategist, he specializes in market positioning and competitive analysis.',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Digital Director',
      bio: 'Sofia oversees all digital campaigns and web development projects. With expertise in performance marketing and UX design, she ensures every digital touchpoint drives measurable business results.',
    },
    {
      name: 'James Morrison',
      role: 'Brand Designer',
      bio: 'James creates visual identities that resonate with target audiences. A graduate of Art Center College of Design, he has won numerous design awards for his innovative approach to brand storytelling.',
    },
    {
      name: 'Priya Patel',
      role: 'Account Director',
      bio: 'Priya manages client relationships and project delivery, ensuring seamless collaboration and exceptional service. Her background in consulting and project management keeps every engagement on track.',
    },
    {
      name: 'David Kim',
      role: 'Development Lead',
      bio: 'David leads our technical team, building high-performance websites and applications. Former tech lead at Airbnb, he specializes in scalable architecture and modern web technologies.',
    },
  ]

  const values = [
    {
      title: 'Strategic Thinking',
      description: 'Every creative decision is grounded in strategic insight and business objectives. We believe great design must serve a purpose beyond aesthetics.',
    },
    {
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, fostering open communication and shared ownership of outcomes. Your success is our success.',
    },
    {
      title: 'Relentless Quality',
      description: 'We obsess over details and never compromise on quality. Every deliverable reflects our commitment to excellence and craft.',
    },
    {
      title: 'Measured Impact',
      description: 'Our work is evaluated by its business impact, not just creative merit. We track results and continuously optimize for better outcomes.',
    },
    {
      title: 'Authentic Innovation',
      description: 'We push creative boundaries while staying true to your brand essence. Innovation should enhance, not overshadow, your core message.',
    },
    {
      title: 'Long-term Vision',
      description: 'We build brands for the future, not just the present. Our strategies consider market evolution and sustainable growth.',
    },
  ]

  const awards = [
    'Webby Awards - Best Agency Website 2023',
    'D&AD Pencil - Brand Identity 2022',
    'Cannes Lions - Digital Campaign Gold 2022',
    'FWA Site of the Day - 15 times',
    'Communication Arts Design Annual 2021',
    'Fast Company Most Innovative Companies 2021',
  ]

  return (
    <div>
      <section className="h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
              We believe in the power<br />
              of purposeful creativity
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="TrendArt was founded on the principle that exceptional brands are built through the intersection of strategic insight, creative excellence, and measurable results."
              className="text-xl text-gray-600 leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl font-bold text-black mb-8">Our story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  TrendArt began in 2016 when Elena Vasquez left her position at Pentagram to create an agency that would challenge the traditional boundaries between strategy and design. She believed that the most powerful brands emerged from deep strategic thinking combined with exceptional creative execution.
                </p>
                <p>
                  What started as a small studio in San Francisco has grown into a team of strategists, designers, and developers who share a common obsession: creating brands that don't just look great, but drive real business results. We've had the privilege of working with everyone from emerging startups to Fortune 500 companies.
                </p>
                <p>
                  Today, TrendArt continues to push the boundaries of what's possible in brand development. We combine data-driven insights with creative intuition, always with the goal of creating authentic connections between brands and their audiences.
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

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet our team
            </h2>
            <SmoothTextReveal 
              text="A diverse group of strategists, creatives, and technologists united by our passion for building meaningful brands and driving business growth."
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="aspect-square mb-6 rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: `url(https://picsum.photos/400/400?random=${index + 80})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                  />
                  <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                  <div className="text-gray-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our values
            </h2>
            <SmoothTextReveal 
              text="These principles guide every decision we make and every project we undertake. They're not just words on a wall – they're the foundation of how we work."
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              delay={0.1}
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-4xl font-bold text-black mb-8">Recognition</h2>
              <SmoothTextReveal 
                text="We're honored to have our work recognized by the industry's most prestigious organizations. These awards reflect our commitment to excellence and innovation."
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                delay={0.1}
              />
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div 
                    key={index} 
                    className="text-gray-700 font-medium"
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
                    {award}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(https://picsum.photos/600/450?random=90)`,
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

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
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
              <h2 className="text-4xl font-bold text-black mb-8">Our culture</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At TrendArt, we believe that great work comes from great people who are passionate about what they do. We've built a culture that values curiosity, collaboration, and continuous learning.
                </p>
                <p>
                  Our team enjoys flexible working arrangements, professional development opportunities, and a comprehensive benefits package. We invest in the latest tools and technologies to ensure our team can do their best work.
                </p>
                <p>
                  We're always looking for talented individuals who share our vision. If you're passionate about building meaningful brands and driving business results, we'd love to hear from you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About