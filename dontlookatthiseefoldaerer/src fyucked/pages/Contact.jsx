import { useState } from 'react'

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
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-4 bg-gray-900 text-white font-medium rounded-none hover:bg-gray-800 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">Tell us about your project</h2>
              
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
                      className={`w-full px-4 py-3 border-2 focus:outline-none focus:border-black transition-colors ${
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
                      className={`w-full px-4 py-3 border-2 focus:outline-none focus:border-black transition-colors ${
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
                    className={`w-full px-4 py-3 border-2 focus:outline-none focus:border-black transition-colors ${
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
                      className={`w-full px-4 py-3 border-2 focus:outline-none focus:border-black transition-colors bg-white ${
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
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black transition-colors bg-white"
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
                    className={`w-full px-4 py-3 border-2 focus:outline-none focus:border-black transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gray-900 text-white font-medium rounded-none hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div>
                    <div className="font-medium mb-2">Email</div>
                    <p className="text-gray-600">hello@studio.com</p>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-2">Phone</div>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-2">Response time</div>
                    <p className="text-gray-600">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                      1
                    </div>
                    <div>
                      <div className="font-medium mb-1">Initial Response</div>
                      <p className="text-gray-600 text-sm">We'll respond within 24 hours to acknowledge your inquiry.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                      2
                    </div>
                    <div>
                      <div className="font-medium mb-1">Discovery Call</div>
                      <p className="text-gray-600 text-sm">We'll schedule a call to understand your project and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                      3
                    </div>
                    <div>
                      <div className="font-medium mb-1">Proposal</div>
                      <p className="text-gray-600 text-sm">We'll prepare a detailed proposal with timeline and scope.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact