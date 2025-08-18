import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    propertyType: "",
    budgetRange: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gp1ph4k",
        "template_rae4q72",
        {
          name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          propertyType: formData.propertyType,
          budgetRange: formData.budgetRange,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        "OZxxxxxx" // your public key
      )
      .then(() => {
        toast({
          title: "✅ Message sent!",
          description: "Thanks for contacting us. We’ll get back to you soon.",
          className: "bg-green-500 text-white"
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          propertyType: "",
          budgetRange: "",
          message: ""
        });
      })
      .catch((error) => {
        toast({
          title: "❌ Failed to send",
          description: error?.text || "Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4 bg-white rounded shadow max-w-lg mx-auto"
    >
      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Subject */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Property Type */}
      <select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Property Type</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="plot">Plot</option>
        <option value="commercial">Commercial</option>
      </select>

      {/* Budget Range */}
      <select
        name="budgetRange"
        value={formData.budgetRange}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Budget Range</option>
        <option value="10-25L">₹10L – ₹25L</option>
        <option value="25-50L">₹25L – ₹50L</option>
        <option value="50L-1Cr">₹50L – ₹1Cr</option>
        <option value="1Cr+">₹1Cr+</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full p-2 border rounded"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
