"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Driver Rent",
    image: "/work-1.png",
    description:
      "The application that directly rent the driver based on the destination which user choosen.",
    link: "https://dribbble.com",
    technologies: "React, Node.js, MongoDB",
    situation:
      "Company needed a scalable solution for the professional driver and the people who want to visit a spesific destination, so the company want a solution to solve this problem",
    task: "Develop a user-friendly, secure online Driver Rent Application.",
    action: "We Build the Applicton with full of coorperation teams",
    result:
      "The application can be build in 6 months and has a good response from the driver and the people",
  },
  {
    title: "Maps Dashboard",
    image: "/work-2.png",
    description:
      "The appilcation is similar with google maps, but has a spesific display ",
    link: "https://dribbble.com",
    technologies: "Vue, Firebase, Tailwind",
    situation: "Needed a dashboard to manage internal processes.",
    task: "Design an intuitive, responsive dashboard.",
    action: "Built using Vue.js, Firebase for real-time updates.",
    result: "Reduced a lost people in a yogykarta region by 30%.",
  },
  {
    title: "Easy Rent",
    image: "/work-3.png",
    description:
      "The company want to build application that has access to suburb area properties.",
    link: "https://dribbble.com",
    technologies: "Next.js, PostgreSQL, AWS",
    situation: "Company wanted an automated property rental system.",
    task: "Create a system for online rental management.",
    action: "Developed with Next.js, PostgreSQL, and AWS.",
    result:
      "Improved rental processing efficiency by 50% and reach a remote area.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio mt-[-20px]">
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold mb-6 md:mt-6">My Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-white">{project.description}</p>
        <Button
          variant="link"
          className="mt-2 flex items-center text-blue-600"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide Details" : "View Details"}{" "}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>

        {open && (
          <div className="mt-4 space-y-2 text-gray-700 dark:text-white">
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p>
              <strong>Situation:</strong> {project.situation}
            </p>
            <p>
              <strong>Task:</strong> {project.task}
            </p>
            <p>
              <strong>Action:</strong> {project.action}
            </p>
            <p>
              <strong>Result:</strong> {project.result}
            </p>
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          className="mt-4 flex items-center text-blue-600"
        >
          View in Dribbble <ExternalLink size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>
  );
}
