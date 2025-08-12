import React, { useState, useEffect } from "react";

const items = [
  "Welcome to MNR Real Estate Hub!",
  "Explore premium properties at your fingertips.",
  "Property Management",
  "Buy, Sell, Rent, & Lease—Residential",
  "Commercial",
  "Industrial Properties",
  "Property Development",
  "Land Development Construction & Renovation",
  "Sales and Marketing",
  "Real Estate Investment",
  "Real Estate Financing",
  "Loan Against Properties",
  "Land Cleaning",
  "Landscaping Business",
  "Financial Planning",
  "Property Marketing",
  "Real Estate Agent Services",
  "Become a Landlord",
  "Legal Consultancy",
  "Bank Bidding",
  "Property on Auctions",
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Special Purpose",
  "Real Estate Agent",
  "Real Estate Broker",
  "Developer",
];

export default function SlidingOneByOne() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-2 px-4">
      <div
        style={{
          color: "#1d4ed8",
          fontSize: "35px",
          padding: "10px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          fontWeight: "600",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {items[index]}
      </div>
    </div>
  );
}
