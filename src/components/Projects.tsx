import React from "react";

function ProjectCard({ title, description, image, link }: any) {
  return (
    <a href={link}>
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300">
        <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover mb-4 rounded-md"
        />
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
        </div>
    </a>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Ares",
      description: "A simple, lightweight text editor written in one file of pure C.",
      image: "DALL·E 2023-10-04 17.59.47 - a 19th century oil painting of the greek god ares.webp",
      link: "https://github.com/torbenconto/ares"
    },
    {
      title: "Zeus",
      description: "A powerful, lexer oriented text manipulation tool made in Go.",
      image: "zeus.webp",
      link: "https://github.com/torbenconto/zeus"
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {projectList.map((project, index) => (
        <div key={index} className="w-full md:w-1/3 lg:w-1/4s">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
