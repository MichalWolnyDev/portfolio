import React from 'react'
import Title from "./UI/Title";

export const Contact = () => {
    return (
        <section className="h-screen flex items-center">
            <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
                <div className="flex items-center max-w-3xl">
                    <div className="flex-auto">
                        <Title>Contact</Title>
                        <p className="text-xl mb-8 font-thin text-justify">
                            Thank you for visiting my portfolio. If you have any questions or would like to collaborate with me, please contact me. I will respond as soon as possible.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact