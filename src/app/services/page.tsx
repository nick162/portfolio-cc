// import {
//   ActivitySquareIcon,
//   BoxIcon,
//   LayoutDashboardIcon,
//   ActivityIcon,
// } from "lucide-react";
import React from "react";
import ServiceCard from "../components/ServiceCard";

const data = [
  {
    title: "Graphic Design",
    description:
      "We Provide a beatiful responsive design for your company and it always accordance to the trends ",
    imageUrl: "/photoshop.png",
  },
  {
    title: "Branding & Logo",
    description:
      "We offer you a great uniq logo for your bussiness that will make it attractive, and also will be attract the attention of your customers",
    imageUrl: "/corel-draw.png",
  },
  {
    title: "UI & UX Design",
    description:
      "We provoide a research interface for whichever suit for the customer and we design it with a excellent pattern design",
    imageUrl: "/figma.png",
  },
  {
    title: "Web Application",
    description:
      "We build a scalable web application for your business and it will uptodate with the latest tehcnologiest",
    imageUrl: "/vscode.png",
  },
];

const Expertise = () => {
  return (
    <section
      id="service"
      className="container m-auto md:mb-20 px-4 py-16 md:py-24"
    >
      <h2 className="font-semibold">My skills</h2>
      <h2 className="mt-4 text-5xl font-semibold">My Expertise</h2>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Card */}
        {/* {data.map((item, index) => {
            return (
              <CardExpertise
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })} */}
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
