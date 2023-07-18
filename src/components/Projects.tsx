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
    liveViewLink: 'https://myspotistats.netlify.app/'
  },
  {
    imgSrc: '/ankieta.png',
    title: 'Questionnaire',
    desc: 'This is a small application that allows us to survey a customer on a chosen topic. It can be used, for example, to evaluate a visit to a restaurant or a store. The project is developed using React.js + TypeScript technology.',
    githubLink: 'https://github.com/MichalWolnyDev/questionnaire-react',
    liveViewLink: 'https://questions-react.netlify.app/'
  },
  {
    imgSrc: '/inzynierka.png',
    title: 'Engineering Project',
    desc: 'A system for booking appointments at car service centers. The frontend of the application has been developed using Vue.js + Vuex technology. Unfortunately, the person responsible for the backend of the application has deleted the entire API, causing the application to not function as intended. However, the source code for the frontend part is still available for viewing on your GitHub repository.',
    githubLink: 'https://github.com/MichalWolnyDev/carservice-app',
    liveViewLink: 'https://inzynierkawsb.netlify.app/login'
  },
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
