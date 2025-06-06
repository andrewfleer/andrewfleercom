import Link from 'next/link'

export default function Resume() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-[#6a0dad]">Resume</h1>
      
      {/* Professional Summary */}
      <section className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d]">
        <h2 className="text-3xl font-bold text-[#6a0dad] mb-4">Professional Summary</h2>
        <p className="text-lg text-[#ff1493]">
          Experienced software developer with a passion for creating elegant solutions to complex problems. 
          Skilled in full-stack development, with expertise in modern web technologies and best practices.
        </p>
      </section>

      {/* Experience */}
      <section className="bg-white p-8 rounded-lg border-4 border-[#ff1493] shadow-[8px_8px_0px_0px_#c01073]">
        <h2 className="text-3xl font-bold text-[#6a0dad] mb-6">Experience</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[#6a0dad]">Senior Software Engineer</h3>
            <p className="text-xl text-[#ff1493]">Tech Company Inc.</p>
            <p className="text-[#6a0dad] mb-4">January 2020 - Present</p>
            <ul className="list-disc list-inside text-[#ff1493] space-y-2">
              <li>Led development of key features for enterprise applications</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented CI/CD pipelines and automated testing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#6a0dad]">Software Engineer</h3>
            <p className="text-xl text-[#ff1493]">Startup Co.</p>
            <p className="text-[#6a0dad] mb-4">June 2018 - December 2019</p>
            <ul className="list-disc list-inside text-[#ff1493] space-y-2">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with design team to implement responsive UIs</li>
              <li>Optimized application performance and reduced load times</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d]">
        <h2 className="text-3xl font-bold text-[#6a0dad] mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">Frontend</h3>
            <p className="text-[#ff1493]">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">Backend</h3>
            <p className="text-[#ff1493]">Node.js, Express, Python, Django</p>
          </div>
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">Database</h3>
            <p className="text-[#ff1493]">PostgreSQL, MongoDB, Redis</p>
          </div>
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">DevOps</h3>
            <p className="text-[#ff1493]">Docker, AWS, CI/CD, Git</p>
          </div>
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">Testing</h3>
            <p className="text-[#ff1493]">Jest, React Testing Library, Cypress</p>
          </div>
          <div className="bg-[#6a0dad]/10 p-4 rounded-lg border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
            <h3 className="font-bold text-[#6a0dad] mb-2">Tools</h3>
            <p className="text-[#ff1493]">VS Code, Git, Jira, Figma</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d]">
        <h2 className="text-3xl font-bold text-[#6a0dad] mb-6">Education</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[#6a0dad]">Bachelor of Science in Computer Science</h3>
            <p className="text-xl text-[#ff1493]">University Name</p>
            <p className="text-[#6a0dad]">2014 - 2018</p>
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <div className="flex justify-center">
        <a
          href="/resume.pdf"
          className="px-8 py-4 bg-[#6a0dad] text-white rounded-lg border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
} 