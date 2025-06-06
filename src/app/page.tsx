import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-[#6a0dad] sm:text-6xl">
          Welcome to My Website
        </h1>
        <p className="text-2xl text-[#ff1493] max-w-2xl mx-auto">
          I'm Andrew Fleer, and this is where I share my thoughts, experiences, and professional journey.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#4a0a8d] transition-all">
          <h2 className="text-3xl font-bold text-[#6a0dad] mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 mb-6">
            Check out my latest thoughts and insights on technology, development, and more.
          </p>
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-[#6a0dad] text-white rounded-lg border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all"
          >
            Read my blog →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg border-4 border-[#ff1493] shadow-[8px_8px_0px_0px_#c01073] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#c01073] transition-all">
          <h2 className="text-3xl font-bold text-[#6a0dad] mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 mb-6">
            View my resume to learn about my professional background and skills.
          </p>
          <Link 
            href="/resume" 
            className="inline-block px-6 py-3 bg-[#6a0dad] text-white rounded-lg border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all"
          >
            View my resume →
          </Link>
        </div>
      </section>
    </div>
  )
}
