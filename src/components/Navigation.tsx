import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-ui-darkgray relative z-50 sticky top-0'>
        <div className='container mx-auto px-8 xl:px-32 md:px-20 py-6'>
            <div className="flex justify-between">
                <div>
                    Michał Wolny
                </div>
                <div>
                    <ul className="flex gap-6 text-txt-gray">
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Experience
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navigation