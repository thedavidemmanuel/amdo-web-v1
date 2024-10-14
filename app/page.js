import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900" />
          <span className="font-bold text-sm">The Amdo Initiative</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            {['Home', 'About Us', 'Programs', 'Blog', 'Join Us', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-800 hover:text-gray-600">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 flex">
        <div className="w-1/2 pr-12">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Building For Everyone</h1>
          <p className="text-lg text-gray-700 mb-8">
            Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual. Together, we shape a future where no one is left behind.
          </p>
          <div className="space-x-4">
            <Link href="#" className="bg-white text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-50">
              Learn More
            </Link>
            <Link href="#" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Donate
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative h-[500px]">
          <Image 
            src="/image.png?height=300&width=300" 
            alt="Community member" 
            width={300} 
            height={300} 
            className="absolute top-0 left-0 rounded-full object-cover"
          />
          <Image 
            src="/image2.png
            ?height=200&width=200" 
            alt="Community member" 
            width={200} 
            height={200} 
            className="absolute top-0 right-0 rounded-full object-cover"
          />
          <Image 
            src="/image3.png
            ?height=250&width=250" 
            alt="Community member" 
            width={250} 
            height={250} 
            className="absolute bottom-0 left-1/4 rounded-full object-cover"
          />
          <Image 
            src="/image4.png?height=180&width=180" 
            alt="Community member" 
            width={180} 
            height={180} 
            className="absolute bottom-1/3 right-1/4 rounded-full object-cover"
          />
        </div>
      </main>
    </div>
  )
}