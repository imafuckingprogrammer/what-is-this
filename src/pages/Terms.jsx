import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'

const Terms = () => {
  const sections = [
    {
      title: 'Service Agreement',
      content: 'TrendArt provides marketing, design, and strategic consulting services. By engaging our services, you agree to work collaboratively with our team to achieve your business objectives while respecting our creative process and professional expertise.'
    },
    {
      title: 'Project Scope & Deliverables',
      content: 'All project deliverables, timelines, and requirements will be clearly outlined in your project proposal. Changes to scope may incur additional costs and timeline adjustments. We maintain the right to refuse work that conflicts with our values or capabilities.'
    },
    {
      title: 'Payment & Billing',
      content: 'Payment terms are typically 50% upfront, 50% upon completion for smaller projects, or monthly billing for ongoing engagements. Late payments may result in project delays or termination. All prices are in USD unless otherwise specified.'
    },
    {
      title: 'Intellectual Property',
      content: 'Upon full payment, you own all final deliverables created specifically for your project. We retain the right to showcase our work in portfolios and case studies. Pre-existing assets, frameworks, and methodologies remain TrendArt property.'
    },
    {
      title: 'Confidentiality',
      content: 'We maintain strict confidentiality regarding your business information, strategies, and proprietary data. We expect the same discretion regarding our processes, pricing, and business methodologies.'
    },
    {
      title: 'Liability & Warranties',
      content: 'Our work is provided "as is" with reasonable care and professional standards. Our liability is limited to the project fee paid. We are not responsible for business outcomes beyond the scope of our direct deliverables.'
    }
  ]

  return (
    <div className="bg-bg-primary">
      <section className="min-h-[50vh] flex items-center justify-center px-6 lg:px-8" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-english_violet mb-8">
              Terms & Conditions
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Clear expectations for a successful partnership. Our terms are designed to protect both parties and ensure excellent results."
              className="text-xl text-text-secondary leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <motion.div 
                  className="bg-bg-primary p-8 rounded-2xl border border-border-light"
                  whileHover={{ 
                    scale: 1.01, 
                    y: -4,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25 
                    }
                  }}
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <SmoothTextReveal 
              text="Questions about our terms? Let's discuss how we can work together while keeping things transparent and straightforward."
              className="text-lg text-text-secondary leading-relaxed mb-8"
              delay={0.1}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 px-6 lg:px-8 bg-bg-quaternary" data-nav-theme="accent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-text-secondary">
            Last updated: January 2025 • TrendArt Marketing Agency • Abu Dhabi, UAE
          </p>
        </div>
      </section>
    </div>
  )
}

export default Terms