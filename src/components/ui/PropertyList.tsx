// src/components/ui/PropertyList.jsx

import { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties"); 
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property._id}
          className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-gray-800 font-semibold mt-2">
              ₹ {property.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-2">{property.description}</p>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>{property.bedrooms} 🛏</span>
              <span>{property.bathrooms} 🛁</span>
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
