import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Coding Workshops" description="Learn new programming skills" />
          <Card title="Hackathons" description="Build projects in teams" />
          <Card title="Networking Events" description="Connect with industry professionals" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App