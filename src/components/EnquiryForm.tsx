// src/components/EnquiryForm.tsx
import { useState } from "react";

const EnquiryForm = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, message } = form;

    // WhatsApp formatted message (use \n for line breaks, then encode)
    const finalMessage = `Enquiry Form Submission:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n💬 Message: ${message}`;
    const encodedMessage = encodeURIComponent(finalMessage);

    // Detect if user is on mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Build WhatsApp URL
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=918904214339&text=${encodedMessage}`
      : `https://wa.me/918904214339?text=${encodedMessage}`;

    // ✅ Success alert
    alert("✅ Opening WhatsApp to send your enquiry...");

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form & close popup
    setForm({ name: "", phone: "", message: "" });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open ? (
        <div className="bg-white w-72 p-4 rounded-lg shadow-lg border">
          <h2 className="text-lg font-bold mb-2">Enquiry Form</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border px-3 py-1 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border px-3 py-1 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="border px-3 py-1 rounded resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-red-500 underline"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/edit-property.png"
            alt="Enquiry"
            className="w-7 h-7"
          />
        </button>
      )}
    </div>
  );
};

export default EnquiryForm;
