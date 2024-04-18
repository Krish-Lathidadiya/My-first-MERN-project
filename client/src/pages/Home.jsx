import React from 'react';

function Home() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:order-2">
            <img src='./images/service.jpg' className="w-full h-auto md:max-w-lg mx-auto" alt="Image 1" />
          </div>
          <div className="md:order-1">
            <div className="text-center md:text-left">
              <p className='font-bold text-lg mb-4' style={{fontSize:'1.2rem'}}>We are the world's best IT company</p>
              <h1 className='text-3xl md:text-4xl font-bold mb-4'>Welcome To My Website</h1>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis reprehenderit maxime aliquam? Nobis, quo pariatur! Suscipit rem iure sequi, quisquam, accusamus recusandae dolorum consequuntur, asperiores doloremque blanditiis mollitia ipsa.
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">Connect Now</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
