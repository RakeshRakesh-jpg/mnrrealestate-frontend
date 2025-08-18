import { Award, Users, Building, Target, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sirImage from '@/assets/sir.jpg';
const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional real estate services that exceed our clients\' expectations while building lasting relationships based on trust, integrity, and results.'
    },
    {
      icon: CheckCircle,
      title: 'Our Vision',
      description: 'To be the most trusted and recognized real estate company in our market, known for our expertise, innovation, and commitment to client success.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, Excellence, Innovation, and Client-Centricity guide everything we do. We believe in transparent communication and ethical practices.'
    }
  ];

  const team = [
   {
  name: 'Mr.Ananda',
  position: 'Founder & CEO',
  experience: '10+ Years Experience',
  image: sirImage,
  specialization: 'Luxury Properties & Investment'
}
  
    /*
    {
      name: 'RASHMI N',
      position: '2nd Director',
      experience: '15+ Years Experience',
      image: '-------------',
      specialization: 'Residential Sales & First-Time Buyers'
    },
    {
      name: 'Madhu Sudan',
      position: 'Property Manager',
      experience: '12+ Years Experience',
      image: '---------------------------------',
      specialization: 'Property Management & Rentals'
    }*/
  ];

  const testimonials = [
    {
      name: 'Rakesh',
      role: 'Homeowner',
      content: 'MNR Real Estate made our home buying experience seamless and stress-free. Their expertise and dedication were evident throughout the entire process.',
      rating: 5
    },
    {
      name: 'Raju',
      role: 'Investor',
      content: 'As an investor, I appreciate their market knowledge and ability to identify profitable opportunities. They\'ve helped me build a solid portfolio.',
      rating: 5
    },
    {
      name: 'Meenakshi ',
      role: 'Seller',
      content: 'They sold our house faster than expected and at a great price. The marketing strategy and professional photos really made a difference.',
      rating: 5
    }
  ];


  const achievements = [
    { number: '70+', label: 'Properties Sold' },
    { number: '200+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Cities Served' },
    { number: '50+', label: 'Awards Won' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero section-padding text-black">
        <div className="container-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-luxury-gold">MNR Real Estate</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-black-200">
            Your trusted partner in real estate for over 1 year, committed to helping you find your perfect property and achieve your real estate goals.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-premium-gray mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MNR India Private limited is indian real estate startup company and its incorporated in feb-2025 with Founder”s 5 years of
                  experience in real estate, Founded in 2025 By Mr Ananda MN, The company focusing on property management, buy and
                  sell , landscaping , construction and renovation in residential, commercial, and industrial,
                </p>
                <p>
                 The company mainly focusingon property management, The Founder worked in real estate for 5 years and started the company , And It Has 2 directors
                 with Rs 10000 Investment. Bangalore based start up real estate company and its corporate office in jp nagar 8th phase.
                </p>
                <p>
                  Today, MNR Real Estate stands as a testament to what can be achieved when passion meets purpose. We continue to evolve with the market while staying true to our core values of integrity, transparency, and client satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center"
                alt="Modern office building"
                className="rounded-2xl shadow-[var(--shadow-luxury)] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-[var(--shadow-card)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Year of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-premium-gray mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-premium-gray mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-premium-gray mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-premium-gray mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with exceptional service and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="property-card text-center">
                <div className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-[var(--shadow-card)]"
                  />
                  <h3 className="text-xl font-bold text-premium-gray mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-premium-gray mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="property-card">
                <div className="p-8">
                  <Quote className="w-8 h-8 text-luxury-gold mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-premium-gray">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero text-white">
        <div className="container-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;