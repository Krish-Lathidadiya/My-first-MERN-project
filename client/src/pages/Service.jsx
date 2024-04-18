import React, { useState, useEffect } from "react";

function Service() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/service", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Service response was not ok");
      }

      const responseData = await response.json();
      setData(responseData.response); // Extracting the array of services
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((service) => (
          <div key={service._id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="./images/service.jpg"
              className="w-full h-auto"
              alt="Service"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.provider}</div>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Price: ${service.price}
              </span>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
