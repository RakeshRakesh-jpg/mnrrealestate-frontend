import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyType: '',
      budget: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['1St Main 1St Cross Road, South, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560078'],
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+19 8904214339', '+19 999 000 5663'],
      color: 'bg-success-green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['mnrrealestate.in', 'support@mnrrealestate.in'],
      color: 'bg-luxury-gold'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      color: 'bg-accent'
    }
  ];

  const officeLocations = [
    {
      name: 'Main Office',
      address: '1St Main 1St Cross Road, South, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
      phone: '+19 8904214339',
      founder: 'Mr.Ananda'
    },
    {
      name: 'Downtown Branch',
      address: '1St Main 1St Cross Road, South, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
      phone: '+19 999 999 9992',
      manager: 'Shaviaanna'
    },
    {
      name: 'Suburban Office',
      address: '1St Main 1St Cross Road, South, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
      phone: '+19 0000 000 66',
      manager: 'Suchithra'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero section-padding text-black">
        <div className="container-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-luxury-gold">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-200">
            Ready to start your real estate journey? Our expert team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="property-card text-center">
                <div className="p-8">
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-premium-gray mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-premium-gray mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="search-input"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="search-input"
                      placeholder="mnr@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="search-input"
                      placeholder="+19 8904214339"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="search-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="renting">Renting a Property</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="management">Property Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="search-input"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-premium-gray mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="search-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500k">Under $500k</option>
                      <option value="500k-1m">500k - 1M</option>
                      <option value="1m-2m">1M - 2M</option>
                      <option value="2m-5m">2M - 5M</option>
                      <option value="over-5m">Over $5M</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-premium-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="search-input resize-none"
                    placeholder="Please describe your requirements or questions in detail..."
                  />
                </div>

                <Button type="submit" size="lg" className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Map & Office Info */}
            <div className="space-y-8">
             {/* Map Placeholder */}
             <div>
             <h3 className="text-2xl font-bold text-premium-gray mb-4">Find Us</h3>
             <div className="rounded-xl overflow-hidden">
             <iframe
             title="MNR Office Map"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.012994252236!2d77.57253189388804!3d12.891430564780055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159d2d6b23ef%3A0xe295f6f7b48d5ed7!2sMNR%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1753187936291!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            </div>
           

              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold text-premium-gray mb-4">Our Locations</h3>
                <div className="space-y-4">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="property-card">
                      <div className="p-6">
                        <h4 className="font-semibold text-premium-gray mb-2">{location.name}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-start">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            {location.address}
                          </p>
                          <p className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                            {location.phone}
                          </p>
                          <p className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                            Manager: {location.manager}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-premium-gray mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">How long does it take to buy a house?</h3>
                <p className="text-muted-foreground text-sm">Typically 30-45 days from offer acceptance to closing, depending on financing and inspections.</p>
              </div>
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">What documents do I need to sell my property?</h3>
                <p className="text-muted-foreground text-sm">Property deed, recent tax statements, utility bills, and any relevant property disclosures.</p>
              </div>
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">Do you charge consultation fees?</h3>
                <p className="text-muted-foreground text-sm">Initial consultations are completely free. We'll discuss your needs and provide expert advice at no cost.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">What areas do you serve?</h3>
                <p className="text-muted-foreground text-sm">We serve 25+ cities across the region with specialized local market knowledge.</p>
              </div>
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">Can you help with investment properties?</h3>
                <p className="text-muted-foreground text-sm">Yes, we specialize in investment opportunities and can help analyze potential returns.</p>
              </div>
              <div>
                <h3 className="font-semibold text-premium-gray mb-2">Do you offer property management?</h3>
                <p className="text-muted-foreground text-sm">We provide comprehensive property management services for landlords and investors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};


export default Contact;