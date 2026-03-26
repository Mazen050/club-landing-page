import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Club</h1>
        <p className="text-xl mb-8">Join us for exciting activities and learning opportunities</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-100 transition">Join Now</button>
      </div>
    </section>
  )
}

export default Hero