import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-12">
          We are a team of passionate individuals committed to making a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 4"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
