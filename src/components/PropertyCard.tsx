import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: 'sale' | 'rent';
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  image,
  type,
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="property-card group rounded-xl overflow-hidden border shadow-md bg-white">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Type Tag & Heart */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
              type === 'sale' ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            For {type === 'sale' ? 'Sale' : 'Rent'}
          </span>

          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isFavorited
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-primary text-lg">
            {price}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-1 text-muted-foreground mt-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-4 h-4" />
            <span>{area} sq ft</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
