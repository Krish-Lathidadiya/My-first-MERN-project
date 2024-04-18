import React, { useState } from "react";
import { useAuth } from '../store/auth'

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const setData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  //put user data
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: ""
    })

    setUserData(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })

    if (response.ok) {
      const res_data = await response.json();
      console.log("contact response data", res_data);
      alert("Message sent successfully");
      setContact({
        username: "",
        email: "",
        message: ""
      })

    }
    // Add code to submit the form data to the server
  };

  return (
    <section className="my-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img src="./images/contact.webp" alt="" className="max-w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Contact Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={contact.username}
                  onChange={setData}
                  placeholder="Enter username"
                  autoComplete="off"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={setData}
                  placeholder="Enter email address"
                  autoComplete="off"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="mb-3">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                 
                  id="message"
                  name="message"
                  value={contact.message}
                  onChange={setData}
                  placeholder="Enter the message"
                  autoComplete="off"
                  required
                  rows="3"
                  cols="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1910603577758!2d72.75490367380104!3d21.144793483785943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ddd12bcd12b%3A0x2038ff3f44cfd4d5!2sVR%20SURAT!5e0!3m2!1sen!2sin!4v1710503034339!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
