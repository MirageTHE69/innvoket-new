// components/TeamSection.tsx
import React from "react";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Liam Noah",
    role: "Creative Director",
    imageSrc: "1.png",
  },
  { name: "Emma Grace", role: "Web Designer", imageSrc: "2.png" },
  {
    name: "William James",
    role: "Graphic Designer",
    imageSrc: "3.png",
  },
  {
    name: "Olivia Sophia",
    role: "Marketing Specialist",
    imageSrc: "4.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-center py-20">
      <div className="max-w-3xl mx-auto text-white mb-12">
        <div className="text-yellow-500 uppercase tracking-wide text-sm mb-4">
          The Team
        </div>
        <h2 className={`text-5xl font-bold mb-4 ${font.className}`}>
          Significant Icons
        </h2>
        <p className="text-gray-400 mb-12">
          Like magnets, alike intellects mysteriously guide themselves towards
          one another. Our team, brimming with confidence and satisfaction,
          proudly presents itself as truly exceptional. Each team member boasts
          unique talents and skills, ensuring through mutual cooperation, we can
          guarantee unrivaled speed in delivering fast, superior services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[#161616] text-white rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
          >
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="text-center mt-4">
              <h3 className={`text-xl font-bold ${font.className}`}>
                {member.name}
              </h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
