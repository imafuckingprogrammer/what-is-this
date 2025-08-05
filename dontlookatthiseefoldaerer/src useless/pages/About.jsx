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
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
            We believe in the power<br />
            of purposeful creativity
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            TrendArt was founded on the principle that exceptional brands are built through 
            the intersection of strategic insight, creative excellence, and measurable results.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Our story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  TrendArt began in 2016 when Elena Vasquez left her position at Pentagram to create 
                  an agency that would challenge the traditional boundaries between strategy and design. 
                  She believed that the most powerful brands emerged from deep strategic thinking 
                  combined with exceptional creative execution.
                </p>
                <p>
                  What started as a small studio in San Francisco has grown into a team of strategists, 
                  designers, and developers who share a common obsession: creating brands that don't 
                  just look great, but drive real business results. We've had the privilege of working 
                  with everyone from emerging startups to Fortune 500 companies.
                </p>
                <p>
                  Today, TrendArt continues to push the boundaries of what's possible in brand development. 
                  We combine data-driven insights with creative intuition, always with the goal of 
                  creating authentic connections between brands and their audiences.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 aspect-[4/3] lg:aspect-[3/4]"></div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet our team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of strategists, creatives, and technologists united by 
              our passion for building meaningful brands and driving business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 aspect-square mb-6 hover:opacity-90 transition-opacity"></div>
                <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                <div className="text-accent font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake. 
              They're not just words on a wall – they're the foundation of how we work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Recognition</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We're honored to have our work recognized by the industry's most prestigious 
                organizations. These awards reflect our commitment to excellence and innovation.
              </p>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 aspect-[4/3]"></div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-200 aspect-[4/3]"></div>
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Our culture</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At TrendArt, we believe that great work comes from great people who are 
                  passionate about what they do. We've built a culture that values curiosity, 
                  collaboration, and continuous learning.
                </p>
                <p>
                  Our team enjoys flexible working arrangements, professional development 
                  opportunities, and a comprehensive benefits package. We invest in the 
                  latest tools and technologies to ensure our team can do their best work.
                </p>
                <p>
                  We're always looking for talented individuals who share our vision. 
                  If you're passionate about building meaningful brands and driving 
                  business results, we'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About