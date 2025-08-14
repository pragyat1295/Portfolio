const About = () => {
  const highlights = [
    {
      number: '4+',
      label: 'Years Experience',
      description: 'Building scalable applications'
    },
    {
      number: '3',
      label: 'Companies',
      description: 'Globant, Intangles Lab, DG Takano'
    },
    {
      number: '10+',
      label: 'Technologies',
      description: 'React Native, Next.js, TypeScript'
    },
    {
      number: '100+',
      label: 'Projects Delivered',
      description: 'From concept to production'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional mobile and web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences with Precision
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a results-driven Mobile Frontend Developer with over 4 years of experience 
                building scalable, user-centric applications. My journey spans across diverse 
                industries and international markets, including 2 years of invaluable experience 
                as a Software Developer in Japan.
              </p>
              
              <p>
                I specialize in React Native, Next.js, and modern JavaScript/TypeScript 
                development, with a strong focus on creating responsive designs and driving 
                projects from concept to launch. My experience includes working with 
                cross-cultural teams and delivering enterprise solutions across various 
                project landscapes.
              </p>
              
              <p>
                Currently at Globant India, I'm working on innovative banking solutions for 
                AIB (Allied Irish Bank), focusing on creating smooth user experiences and 
                ensuring high app reliability across iOS and Android platforms.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Top Employee Recognition among 100+ developers at Intangles Lab
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Successfully managed recruitment drives across 5+ IITs
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PG Mr. Fresher at Indian Institute of Technology, Hyderabad (2019)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center card-shadow"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {item.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
