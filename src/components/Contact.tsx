import React from 'react'
import Title from "./UI/Title";

export const Contact = () => {
    return (
        <section className="md:h-screen h-full flex items-center bg-ui-black relative" id="contact">
            <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
                <div className="flex items-center max-w-3xl">
                    <div className="flex-auto md:w-1/2 w-full">
                        <Title>Contact</Title>
                        <p className="md:text-xl text-base mb-8 font-thin text-justify">
                            Thank you for visiting my portfolio. If you have any questions or would like to collaborate with me, please contact me. I will respond as soon as possible.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact