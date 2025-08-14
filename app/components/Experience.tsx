const Experience = () => {
  const experiences = [
    {
      company: 'Globant India Pvt. Ltd.',
      position: 'Mobile Developer',
      location: 'Pune, India',
      duration: 'July 2024 – Present',
      client: 'AIB (Allied Irish Bank)',
      description: 'Working on the AIB My Bank mobile app for iOS and Android, focusing on user experience and app reliability.',
      achievements: [
        'Crafted smooth and intuitive onboarding journey for non-registered users',
        'Introduced modular components for consistent user data handling',
        'Delivered user-friendly fund transfer experience with transaction clarity',
        'Designed engaging messaging screen for effective user communications',
        'Played key role in app localization with multilingual support',
        'Ensured 20-hour daily uptime across iOS and Android platforms'
      ],
      technologies: ['React Native', 'Expo-CLI', 'Redux Toolkit', 'TypeScript', 'Micro-frontend']
    },
    {
      company: 'Intangles Lab Pvt. Ltd.',
      position: 'Frontend Developer',
      location: 'Pune, India',
      duration: 'March 2023 – July 2024',
      description: 'Developed comprehensive vehicle management solutions and dashboards for fleet operations.',
      achievements: [
        'Developed intuitive dashboards aggregating 30,000+ daily vehicle records',
        'Managed database of 500,000+ historical entries for real-time insights',
        'Engineered boundary algorithms using Google Polyline for territory services',
        'Built cross-platform solutions for 10,000+ vehicles across web, iOS, and Android',
        'Automated vehicle migration workflows, increasing team efficiency by 30%',
        'Implemented dynamic UI components like filters, pagination, and search'
      ],
      technologies: ['React.js', 'React Native', 'Redux Toolkit', 'TypeScript', 'MUI', 'Google Maps APIs']
    },
    {
      company: 'DG Takano',
      position: 'Software Developer',
      location: 'Osaka, Japan',
      duration: 'June 2021 – March 2023',
      description: 'Built full-cycle work management systems and migrated corporate websites to modern tech stack.',
      achievements: [
        'Collaborated with C-level stakeholders to build work management system from scratch',
        'Developed responsive UI dashboard improving project efficiency by 13%',
        'Migrated corporate website from WordPress to Next.js, boosting performance from 72% to 98%',
        'Implemented job portal, Google-integrated contact form, and e-commerce module',
        'Contributed to 23% increase in product sales through dynamic features',
        'Optimized data pipelines reducing processing times by 25%'
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'Strapi', 'Google APIs', 'Shopify']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4+ years of building scalable applications across diverse industries and international markets
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 card-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  <div className="text-lg font-semibold text-primary-600 mb-1">
                    {exp.company}
                  </div>
                  {exp.client && (
                    <div className="text-md text-gray-600 mb-1">
                      Client: {exp.client}
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
