import React from 'react'
import Title from "./UI/Title";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="md:h-screen h-full flex items-center bg-black relative" id="exp">
    <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex md:flex-row flex-col items-center gap-16">
            <div className="flex-auto md:w-1/2 w-full">
                <Title>Work experience</Title>
                <p className="md:text-xl text-base mb-8 font-thin text-justify">
                Since the beginning of 2019, I have been working full-time at <a href="https://webwizards.pl/" target='_blank'>Webwizards</a>, a company located near Poznań. In this company, I had the opportunity to take my first steps as a frontend developer. My main responsibility is creating and developing websites for the automotive industry. I have also had the chance to work on the creation of car sales portals (such as <a href="https://www.plichta.com.pl/" target='_blank'>https://www.plichta.com.pl/</a>). Working at this company has allowed me to familiarize myself with the specifics of being a frontend developer and has further developed both my technical and soft skills.
                </p>
            </div>
            <div className="flex-auto md:w-1/2 w-full">
            <a href="https://webwizards.pl/" target='_blank'>
            <Image
              className="mx-auto rounded-full shadow-image bg-ui-darkblue p-8"
              src="/webwizards.jpg"
              alt="Webwizards"
              width="280"
              height="280"
            />
            </a>
            </div>

        </div>
    </div>
</section>
  )
}

export default Experience