import React from 'react'

function Services() {
  return (
    <div>
      <div className="py-12 dark:bg-slate-900">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">
            Take a <span className="text-indigo-600">Peek Inside</span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            Come to experience the nature at its best.
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8 md:pl-4 md:pr-4">
          {/* Learn Webby */}
          <div className="flex-col justify-center align-middle hover:cursor-pointer relative md:w-5/12 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              className="rounded-2xl h-[25vh] sm:h-[65vh]"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Learn Webby"
            />
            <div className='text-3xl text-center' style={{color: "white"}}>Luxury Rooms</div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
              {/* <h1 className="text-white mb-3 font-bold uppercase lg:text-xl">Learn Webby</h1>
              <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                Go to Docs
              </button> */}
            </div>
          </div>

          {/* Visit Website */}
          <div className="flex-col justify-center align-middle hover:cursor-pointer relative md:w-5/12 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              className="rounded-2xl h-[25vh] sm:h-[65vh]"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Learn Webby"
            />
            <div className='text-3xl text-center' style={{color: "white"}}>Wedding & Parties</div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
              {/* <h1 className="text-white mb-3 font-bold uppercase lg:text-xl">Learn Webby</h1>
              <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                Go to Docs
              </button> */}
            </div>
          </div>

          {/* Repeated Items */}
          <div className="flex-col justify-center align-middle hover:cursor-pointer relative md:w-5/12 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              className="rounded-2xl h-[25vh] sm:h-[65vh]"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Learn Webby"
            />
            <div className='text-3xl text-center' style={{color: "white"}}>Aesthetic Dinner</div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
              {/* <h1 className="text-white mb-3 font-bold uppercase lg:text-xl">Learn Webby</h1>
              <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                Go to Docs
              </button> */}
            </div>
          </div>

          <div className="flex-col justify-center align-middle hover:cursor-pointer relative md:w-5/12 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              className="rounded-2xl h-[25vh] sm:h-[65vh]"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Learn Webby"
            />
            <div className='text-3xl text-center' style={{color: "white"}}>Jungle Adventure</div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
              {/* <h1 className="text-white mb-3 font-bold uppercase lg:text-xl">Learn Webby</h1>
              <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                Go to Docs
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
