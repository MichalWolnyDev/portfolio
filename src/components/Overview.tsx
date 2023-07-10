import React from 'react'
import Image from "next/image";
import Title from "./UI/Title";

const Overview = () => {
    return (
        <section className="h-screen flex items-center">
            <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
                <div className="flex items-center max-w-3xl">
                    <div className="flex-auto">
                        <Title>About me</Title>
                        <p className="text-xl mb-8 font-thin text-justify">
                            I am a frontend developer with over four years of experience. So far, I have mainly worked with Vue.js, but I am also ready to work on projects using the React.js + Typescript stack. I am open to new experiences and I want to continue growing in my profession.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Overview