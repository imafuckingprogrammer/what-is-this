import { useState } from 'react'
import { motion } from 'framer-motion'
import { CleanButton } from '../components/ui/clean-button'
import { MultiSelectButtons } from '../components/ui/multi-select-buttons'
import SmoothTextReveal from '../components/ui/SmoothTextReveal'
import AnimatedSection from '../components/ui/AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: [],
    budget: [],
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
    if (!formData.projectType.length) newErrors.projectType = 'Please select at least one project type'
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

  const handleMultiSelectChange = (name, values) => {
    setFormData(prev => ({ ...prev, [name]: values }))
    
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
      projectType: [],
      budget: [],
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
    <div className="bg-bg-primary">
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-bg-secondary" data-nav-theme="light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-3xl font-bold text-text-primary mb-8">Tell us about your project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-text-primary transition-colors ${
                        errors.name ? 'border-red-500' : 'border-border-light'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-text-primary transition-colors ${
                        errors.email ? 'border-red-500' : 'border-border-light'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-text-primary transition-colors ${
                      errors.company ? 'border-red-500' : 'border-border-light'
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <MultiSelectButtons
                  options={projectTypes}
                  selectedValues={formData.projectType}
                  onChange={(values) => handleMultiSelectChange('projectType', values)}
                  label="Project Type"
                  required={true}
                  error={errors.projectType}
                  multiple={true}
                />

                <MultiSelectButtons
                  options={budgetRanges}
                  selectedValues={formData.budget}
                  onChange={(values) => handleMultiSelectChange('budget', values)}
                  label="Budget Range"
                  required={false}
                  error={errors.budget}
                  multiple={false}
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-text-primary transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-border-light'
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
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Get in touch</h3>
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
                      <div className="font-semibold text-text-primary mb-2">Office</div>
                      <p className="text-text-secondary">
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
                      <div className="font-semibold text-text-primary mb-2">General Inquiries</div>
                      <p className="text-text-secondary">
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
                      <div className="font-semibold text-text-primary mb-2">Business Hours</div>
                      <p className="text-text-secondary">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        We typically respond within 4 hours during business hours
                      </p>
                    </motion.div>
                  </div>
                </div>


              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-bg-tertiary" data-nav-theme="light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Prefer to call?
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.3}>
            <SmoothTextReveal 
              text="Sometimes a conversation is the best way to get started. Call us directly to discuss your project."
              className="text-xl text-text-secondary mb-8 leading-relaxed"
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