import React from 'react'
import { useAuth } from '../store/auth'

function About() {
  const { user } = useAuth();
  let aboutUser = "";

  if (user) {
    aboutUser = user.username;
  } else {
    aboutUser = "to our website";
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Page</h1>
        <p className="text-lg text-gray-700 mb-8">
          Hi, Welcome {aboutUser}
        </p>
      </div>
    </section>
  )
}

export default About
