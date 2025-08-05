import { useState } from 'react'
import { motion } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Brand Strategy',
    'Visual Identity',
    'Digital Marketing',
    'Web Development',
    'Creative Campaigns',
    'Brand Consulting',
    'Other',
  ]

  const budgetRanges = [
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000 - $150,000',
    '$150,000+',
    'Not sure yet',
  ]

  const teamContacts = [
    {
      name: 'Elena Vasquez',
      role: 'Creative Director & Founder',
      email: 'elena@trendart.co',
      speciality: 'Strategy & Creative Direction',
    },
    {
      name: 'Marcus Chen',
      role: 'Strategy Lead',
      email: 'marcus@trendart.co',
      speciality: 'Brand Strategy & Market Analysis',
    },
    {
      name: 'Priya Patel',
      role: 'Account Director',
      email: 'priya@trendart.co',
      speciality: 'Project Management & Client Relations',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Digital Director',
      email: 'sofia@trendart.co',
      speciality: 'Digital Marketing & Web Development',
    },
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-black mb-6">Thank you for reaching out!</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to learn more about your project.
          </p>
          <CleanButton 
            onClick={() => setIsSubmitted(false)}
            text="Send" 
            className="w-40"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
              Let's start<br />
              something great
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Ready to accelerate your business growth? We'd love to hear about your project and explore how TrendArt can help you achieve your goals."
              className="text-xl text-gray-600 leading-relaxed"
              delay={0.2}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-3xl font-bold text-black mb-8">Tell us about your project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-black mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors bg-white ${
                        errors.projectType ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <CleanButton 
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? 'Sending...' : 'Submit'}
                  className="w-full disabled:opacity-50"
                />
              </form>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          delay: 0.1
                        }
                      }}
                    >
                      <div className="font-semibold text-black mb-2">Office</div>
                      <p className="text-gray-600">
                        123 Design Street<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          delay: 0.2
                        }
                      }}
                    >
                      <div className="font-semibold text-black mb-2">General Inquiries</div>
                      <p className="text-gray-600">
                        Phone: +1 (555) 123-4567<br />
                        Email: hello@trendart.co
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          delay: 0.3
                        }
                      }}
                    >
                      <div className="font-semibold text-black mb-2">Business Hours</div>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        We typically respond within 4 hours during business hours
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Direct contacts</h3>
                  <div className="space-y-6">
                    {teamContacts.map((contact, index) => (
                      <motion.div 
                        key={index} 
                        className="border-l-4 border-black pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: index * 0.1 + 0.4
                          }
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <div className="font-semibold text-black">{contact.name}</div>
                        <div className="text-sm text-gray-600 mb-1">{contact.role}</div>
                        <div className="text-sm text-gray-600 mb-2">{contact.speciality}</div>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-black hover:underline text-sm"
                        >
                          {contact.email}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">What happens next?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Initial Response",
                        description: "We'll respond within 24 hours to acknowledge your inquiry and schedule a discovery call."
                      },
                      {
                        step: "2", 
                        title: "Discovery Call",
                        description: "30-45 minute call to understand your goals, challenges, and project requirements."
                      },
                      {
                        step: "3",
                        title: "Proposal", 
                        description: "Detailed proposal with strategy, timeline, and investment within 48-72 hours."
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: index * 0.1 + 0.8
                          }
                        }}
                      >
                        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-medium text-black">{item.title}</div>
                          <SmoothTextReveal 
                            text={item.description}
                            className="text-gray-600 text-sm"
                            delay={0.1}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold text-black mb-6">
              Prefer to call?
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Sometimes a conversation is the best way to get started. Call us directly to discuss your project."
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              delay={0.1}
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.5}>
            <a href="tel:+15551234567">
              <CleanButton 
                text="Call" 
                className="w-40"
              />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Contact