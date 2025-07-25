import { useState, useEffect } from 'react';
import { Search, Grid, List, MapPin, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';

interface Property {
  _id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'sale' | 'rent';
}

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);

  // ✅ Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/properties');
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-subtle section-padding">
        <div className="container-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-premium-gray mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of premium properties for sale and rent.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by location, property type, or keywords..."
                    className="pl-10 search-input"
                  />
                </div>
              </div>
              <div>
                <select className="search-input">
                  <option>Property Type</option>
                  <option>Houses</option>
                  <option>Apartments</option>
                  <option>Condos</option>
                  <option>Townhouses</option>
                </select>
              </div>
              <div>
                <select className="search-input">
                  <option>Price Range</option>
                  <option>0 - 500k</option>
                  <option>500k - 1M</option>
                  <option>1M - 2M</option>
                  <option>2M+</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex-1">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button className="btn-hero flex-1">Search</Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <select className="search-input">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                    <select className="search-input">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Area (sq ft)</label>
                    <input type="number" placeholder="1000" className="search-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Area (sq ft)</label>
                    <input type="number" placeholder="5000" className="search-input" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-premium-gray">
                {properties.length} Properties Found
              </h2>
              <p className="text-muted-foreground">Showing all available properties</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="search-input !py-2 min-w-[140px]">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-muted'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-muted'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {properties.map((property) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                price={property.price.toLocaleString()} // Convert to string with commas
                image={property.image}
                location={property.location}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                type={property.type}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" className="bg-primary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero">
        <div className="container-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our experienced agents are here to help you find the perfect property that meets all your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <MapPin className="w-5 h-5 mr-2" />
              Contact an Agent
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Viewing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
