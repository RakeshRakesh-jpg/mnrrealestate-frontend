import { Search, MapPin, Building, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import SlidingOneByOne from '../components/SlidingOneByOne';

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

  const heroSlides = [
    "https://housedesigninnepal.com/wp-content/uploads/2024/11/download-6.jpg.webp",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/29334668/pexels-photo-29334668.png",
    "https://images.pexels.com/photos/9976121/pexels-photo-9976121.jpeg",
    "https://images.pexels.com/photos/33259508/pexels-photo-33259508.jpeg",
    "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section with Auto-Sliding Slider + Overlay Content */}
      <div className="relative w-full h-[500px]">
        <Swiper
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-[500px] bg-center bg-cover"
                style={{ backgroundImage: `url(${slide})` }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Hero text content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Find Your Dream Home
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl mb-6">
                    Explore our curated listings of premium homes, apartments, and commercial spaces across the country.
                  </p>
                  <Button size="lg" className="btn-hero">
                    Start Your Search
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Sliding Text Section */}
      <SlidingOneByOne />


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
                  { title: 'Expert Market Knowledge', desc: 'Deep understanding of local markets and trends' },
                  { title: 'Personalized Service', desc: "Tailored solutions for every client's unique needs" },
                  { title: 'End-to-End Support', desc: "From search to closing, we're with you every step" },
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
