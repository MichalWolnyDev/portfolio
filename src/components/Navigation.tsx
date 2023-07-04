import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-ui-darkgray'>
        <div className='container mx-auto px-4 py-6'>
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
                            Skills
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