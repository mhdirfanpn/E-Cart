import React from 'react'

const Subscribe = () => {
    return (
        <div className='h-44 bg-blue-600 w-full mt-16'>
            <div className="flex justify-between text-white ">
                <div className="px-40 py-10">
                    <h1 className='text-2xl font-bold'>Sign Up for Newsletter</h1>
                    <p className='max-w-md mt-3'>Lorem ipsum dolor amet. In voluptatibus enim quo autem molestiae et illum sequi quo maiores odit. </p>
                </div>
                <div className="px-40 py-16">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                        <button className="absolute right-0 px-2 py-1 bg-gray-600 text-white rounded-lg  m-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe