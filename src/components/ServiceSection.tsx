// components/ServiceSection.tsx
import React from "react";
import ServiceCard from "./ServiceCard";
import IconPlaceholder from "./IconPlaceholder"; // Replace with actual icons if available

const ServiceSection: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-center py-20">
      <div className="max-w-3xl mx-auto text-white mb-12">
        <div className="text-yellow-500 uppercase tracking-wide text-sm mb-4">
          Our Services
        </div>
        <h2 className="text-5xl font-bold mb-4">How Can We Help?</h2>
        <p className="text-gray-400">
          From the groundwork to your online commercial growth, we've got it all
          under control! Explore our internal services:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ServiceCard
          title="Digital Marketing"
          description="Expand your reach and grow your business with our comprehensive digital marketing services. From SEO and PPC to content marketing and social media management, we tailor strategies to your unique needs."
          price="Prices start from 1500€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
        <ServiceCard
          title="E-Commerce Solutions"
          description="Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers."
          price="Prices start from 2500€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
        <ServiceCard
          title="Consulting & Strategy"
          description="Gain insights and direction with our expert consulting services. We provide strategic advice on branding, marketing, and digital transformation to help you navigate and thrive in the competitive landscape."
          price="Prices start from 2000€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
        <ServiceCard
          title="Email Marketing"
          description="Boost your conversions with targeted email marketing campaigns. We design, write, and manage campaigns that engage your audience, drive traffic, and increase sales."
          price="Prices start from 1200€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
        <ServiceCard
          title="UX/UI Design"
          description="Enhance your customer experience with intuitive and engaging UX/UI design. We create user-friendly interfaces and seamless interactions that keep your customers coming back."
          price="Prices start from 1800€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
        <ServiceCard
          title="Content Creation"
          description="Engage and captivate your audience with high-quality content. Our services include blog posts, videos, graphics, and more, all crafted to boost your brand's visibility and impact."
          price="Prices start from 1000€."
          svgIcon={<IconPlaceholder />} // Replace with actual SVG
        />
      </div>
    </div>
  );
};

export default ServiceSection;
