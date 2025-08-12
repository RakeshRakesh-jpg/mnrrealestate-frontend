import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Example: send data to API
    // fetch("/api/send-message", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      propertyType: "",
      budget: "",
      message: "",
    });
  };

  return (
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
  );
}
