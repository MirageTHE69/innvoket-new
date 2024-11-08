// components/ServiceCard.tsx
import React from "react";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  svgIcon: JSX.Element;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  svgIcon,
}) => (
  <div className="bg-[#161616] text-white p-10 rounded-lg shadow-md flex flex-col items-start border border-transparent hover:border-yellow-500 transition duration-300">
    <div className="mb-4">{svgIcon}</div>
    <h3 className={`text-2xl font-extrabold uppercase mb-2 ${font.className}`}>
      {title}
    </h3>
    <p className="text-lg  text-start text-gray-600 mb-4">{description}</p>

    <button
      className={`text-yellow-500 font-bold flex items-center hover:underline ${font.className}`}
    >
      Ask for offer <span className="ml-2">➔</span>
    </button>
  </div>
);

export default ServiceCard;
