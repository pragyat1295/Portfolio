const Education = () => {
  const education = [
    {
      degree: 'Master of Technology',
      field: 'Biomedical Engineering',
      institution: 'Indian Institute of Technology Hyderabad',
      location: 'Hyderabad, India',
      duration: '2019 - 2021',
      achievements: [
        'Implemented algorithm to segment 3D eye OCT images for disease detection',
        'Developed CT-Scan image segmentation in 3D for tumor detection using deep learning',
        'PG Mr. Fresher at IIT Hyderabad (2019)',
        'Managed placement drives across multiple IITs'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Instrumentation Engineering',
      institution: 'Dr. A.P.J. Abdul Kalam Technical University',
      location: 'Lucknow, India',
      duration: '2013 - 2017',
      achievements: [
        'Created a portable ECG device for heart rate monitoring',
        'Developed system for monitoring human heart condition',
        'Strong foundation in instrumentation and control systems',
        'Hands-on experience with biomedical device development'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

  const certifications = [
    {
      title: 'React Native Development',
      issuer: 'Industry Experience',
      year: '2021-Present',
      description: 'Extensive hands-on experience in React Native development across multiple projects'
    },
    {
      title: 'Next.js & Modern Web Development',
      issuer: 'Professional Projects',
      year: '2021-Present',
      description: 'Advanced proficiency in Next.js, React.js, and modern web development practices'
    },
    {
      title: 'Cross-Cultural Team Leadership',
      issuer: 'DG Takano, Japan',
      year: '2021-2023',
      description: '2 years of international experience leading development teams in Japan'
    },
    {
      title: 'Enterprise Software Development',
      issuer: 'Multiple Organizations',
      year: '2021-Present',
      description: 'Experience in building scalable enterprise solutions for banking, automotive, and management systems'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in engineering with specialized focus on biomedical and instrumentation systems
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 card-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      {edu.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h4>
                        <div className="text-lg font-semibold text-primary-600 mb-1">
                          {edu.field}
                        </div>
                        <div className="text-lg text-gray-700 mb-2">
                          {edu.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{edu.location}</span>
                          </div>
                          <div className="hidden sm:block text-gray-400">•</div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements & Projects</h5>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications & Experience */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Qualifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 card-shadow hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h4>
                    <div className="text-primary-600 font-medium mb-1">
                      {cert.issuer}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {cert.year}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Continuous Learning Journey
            </h4>
            <p className="text-gray-600 leading-relaxed">
              My educational journey from biomedical engineering to mobile frontend development showcases 
              adaptability and continuous learning. The strong foundation in engineering principles, 
              combined with hands-on experience in cutting-edge technologies, enables me to approach 
              complex problems with both analytical rigor and creative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
