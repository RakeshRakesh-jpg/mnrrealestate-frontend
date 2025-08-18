import { useEffect, useState } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div>
      <h2>Available Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>Price: ₹{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
