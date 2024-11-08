// components/FeatureCard.tsx
import React from "react";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type FeatureCardProps = {
  title: string;
  description: string;
  svgIcon: JSX.Element;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  svgIcon,
}) => (
  <div className="bg-[#161616] text-white p-8 rounded-lg shadow-md flex flex-col items-start border border-transparent hover:border-yellow-500 transition duration-300">
    <div className="mb-4 text-yellow-500">{svgIcon}</div>
    <h3 className={`text-2xl font-extrabold uppercase mb-2 ${font.className}`}>
      {title}
    </h3>
    <p className="text-lg mt-5 text-start text-gray-400 mb-6">{description}</p>
    <button className="text-yellow-500 font-bold mt-auto self-end flex items-center">
      <span className={`mr-1 ${font.className}`}>i</span>
    </button>
  </div>
);

export default FeatureCard;
