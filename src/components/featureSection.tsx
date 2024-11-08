// components/FeatureSection.tsx
import React from "react";
import FeatureCard from "../components/featureCard";
import IconPlaceholder from "./IconPlaceholder"; // Use actual SVGs or placeholders here

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-center py-20">
      <div className="max-w-3xl mx-auto text-white mb-12">
        <div className="text-yellow-500 uppercase tracking-wide text-sm mb-4">
          Included Features
        </div>
        <h2 className="text-5xl font-bold mb-4">Each Stage is Seized</h2>
        <p className="text-gray-400">
          Your revamped store will possess the many impressive attributes and
          powerful tools that turn spectators into buyers, maintaining an
          impeccable aesthetic and functionality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FeatureCard
          title="Custom Design"
          description="Unique and tailored designs that reflect your brand’s personality and values."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG icon for custom design
        />
        <FeatureCard
          title="Responsive Layout"
          description="Ensuring your store looks stunning and functions perfectly on all devices."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG icon for responsive layout
        />
        <FeatureCard
          title="Social Media"
          description="Linking your shop to social media sites to boost your digital visibility."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG icon for social media
        />
      </div>
    </div>
  );
};

export default FeatureSection;
