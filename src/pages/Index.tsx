import { Search, MapPin, Building, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import heroImage from '@/assets/hero-home.jpg';

const Index = () => {
  const featuredProperties = [
    {
      id: '1',
      title: 'Modern Luxury Villa with Ocean View',
      price: '1,250,000',
      location: 'Beverly Hills, CA',
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&h=400&fit=crop&crop=center',
      type: 'sale' as const
    },
    {
      id: '2',
      title: 'Downtown Penthouse Apartment',
      price: '4,500/month',
      location: 'Manhattan, NY',
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center',
      type: 'rent' as const
    },
    {
      id: '3',
      title: 'Cozy Family Home with Garden',
      price: '750,000',
      location: 'Austin, TX',
      bedrooms: 3,
      bathrooms: 2,
      area: 2400,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&crop=center',
      type: 'sale' as const
    }
  ];

  const stats = [
    { icon: Building, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1,200+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: MapPin, value: '25+', label: 'Cities Covered' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-premium-gray/50"></div>
        </div>

        <div className="relative z-10 text-center text-white container-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your <span className="text-luxury-gold">Dream</span> Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Discover premium properties with MNR Real Estate. Your trusted partner in finding the perfect home.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  placeholder="Enter city or area"
                  className="search-input text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Property Type</label>
                <select className="search-input text-gray-900">
                  <option>All Types</option>
                  <option>Houses</option>
                  <option>Apartments</option>
                  <option>Condos</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Price Range</label>
                <select className="search-input text-gray-900">
                  <option>Any Price</option>
                  <option>0 - 500k</option>
                  <option>500k - 1M</option>
                  <option>1M+</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full btn-hero h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Browse Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-premium-gray"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
<div className="bg-gray-100 py-2">
  <div
    dangerouslySetInnerHTML={{
      __html: `<marquee behavior="scroll" direction="left" scrollamount="8" style="color: #1d4ed8; font-size: 18px; padding: 10px;">
        Welcome to MNR Real Estate Hub! Explore premium properties at your fingertips.* Property Management * Buy, Sell, Rent, & Lease--Residential,* Commercial,* Industrial Properties  *Property Development  *Land DevelopmentConstruction & Renovation  *Sales and Marketing  *Real Estate Investment  * Real Estate Financing  * Loan Against Properties  * Land Cleaning  * Landscaping Business  * Financial Planning  * Property Marketing
* Real Estate Agent Services  * Become a Landlord  * Legal Consultancy  * Bank Bidding  * Property on Auctions  * Residential  * Commercial  * Industrial  * Land  * Special Purpose  * Real Estate Agent  * Real Estate Broker  *Developer


      </marquee>`,
    }}
  />
</div>
      {/* Stats Section */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-premium-gray mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding">
        <div className="container-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-premium-gray mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties available for sale and rent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-luxury">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-subtle">
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-premium-gray mb-6">
                Why Choose <span className="text-primary">MNR Real Estate?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience in the real estate industry, MNR Real Estate has been helping families and investors find their perfect properties. We pride ourselves on personalized service, market expertise, and unwavering commitment to our clients.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Expert Market Knowledge',
                    desc: 'Deep understanding of local markets and trends',
                  },
                  {
                    title: 'Personalized Service',
                    desc: "Tailored solutions for every client's unique needs",
                  },
                  {
                    title: 'End-to-End Support',
                    desc: "From search to closing, we're with you every step",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-premium-gray">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="btn-hero">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center"
                alt="Modern home interior"
                className="rounded-2xl shadow-[var(--shadow-luxury)] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-[var(--shadow-card)] max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hero rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Real Estate Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
