import React from "react";
import Title from "./UI/Title";

import BlueLine from "./UI/BlueLine";
import ProjectCard from "./UI/ProjectCard";


const ProjectList = [
  {
    imgSrc: '/myspotistats.png',
    title: 'MySpotiStats',
    desc: 'MySpotiStats is an app that allows browsing statistics related to our Spotify account. It provides insights into our most frequently listened albums or artists, among other things. It is built using React.js + TS technology. The data in the application is retrieved from the official Spotify Web API.',
    githubLink: 'https://github.com/MichalWolnyDev/myspotistats',
    liveViewLink: 'Soon'
  }
]


const Projects = () => {
  return (
    <section className="h-full flex items-center bg-ui-black relative" id="projects">
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex md:flex-row flex-col items-center gap-16">
          <div className="flex-auto md:w-1/2 w-full">
            <Title>Personal projects</Title>
            <BlueLine />
            <br />
            <div className="flex md:flex-row flex-col gap-4 flex-wrap">
              {ProjectList.map((project, id) => (
                <ProjectCard key={id} {...project} />

              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
