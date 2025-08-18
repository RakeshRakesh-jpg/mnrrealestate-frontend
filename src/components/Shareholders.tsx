import React from "react";
import { Button } from "@/components/ui/button";

export default function Shareholders() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Shareholders & Members
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Shareholders & Members section of MNR Real Estate.
          Here, you’ll find exclusive updates, reports, and opportunities to
          engage with our growing community.
        </p>

        {/* Hero Button */}
        <Button
          variant="default"
          className="btn-hero text-lg px-6 py-2 animate-blink"
        >
          Join Us
        </Button>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Updates</h3>
          <p className="text-gray-600">
            Get early access to company announcements, project launches, and
            strategic plans.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Reports</h3>
          <p className="text-gray-600">
            Download annual performance reports and financial statements.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Networking</h3>
          <p className="text-gray-600">
            Participate in members-only events and business networking
            opportunities.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
        <p className="text-gray-600 mb-6">
          Reach out to our support team for shareholder and membership
          assistance.
        </p>
        <Button variant="outline" className="px-6 py-2">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
