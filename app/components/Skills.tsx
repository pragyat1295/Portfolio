const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['JavaScript', 'TypeScript', 'C++', 'Node.js', 'Python']
    },
    {
      title: 'Frameworks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ['React Native', 'Next.js', 'Expo', 'Express.js', 'React.js']
    },
    {
      title: 'Tools & Technology',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Redux', 'Redux-Saga', 'Jest', 'Cypress', 'Webpack', 'Circle-CI', 'Vercel', 'Git']
    },
    {
      title: 'Libraries & APIs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['Google Maps', 'React-Leaflet', 'MUI', 'Bootstrap', 'Tailwind', 'Chart.js', 'JWT']
    },
    {
      title: 'Database & Cloud',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: ['MongoDB', 'Mongoose', 'AWS APIs', 'Digital Ocean', 'Postman']
    },
    {
      title: 'Development Tools',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      skills: ['Babel', 'Microfrontend', 'Metro Bundler', 'Vite', 'Android Studio', 'JIRA']
    }
  ]

  const proficiencyLevels = [
    { skill: 'React Native', level: 95, category: 'Mobile Development' },
    { skill: 'JavaScript/TypeScript', level: 90, category: 'Programming' },
    { skill: 'Next.js', level: 88, category: 'Web Development' },
    { skill: 'React.js', level: 92, category: 'Web Development' },
    { skill: 'Redux/State Management', level: 85, category: 'State Management' },
    { skill: 'Node.js', level: 80, category: 'Backend' },
    { skill: 'MongoDB', level: 75, category: 'Database' },
    { skill: 'Git/Version Control', level: 90, category: 'DevOps' }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across modern web and mobile development technologies
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 card-shadow hover:bg-white transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-primary-300 hover:text-primary-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-gray-900">{item.skill}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.category})</span>
                  </div>
                  <span className="text-sm font-medium text-primary-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Continuous Learning & Adaptation
            </h4>
            <p className="text-gray-600 leading-relaxed">
              I stay current with the latest technologies and best practices in mobile and web development. 
              My experience spans across different operating systems (Windows, Ubuntu, macOS) and I'm 
              proficient in modern development workflows including CI/CD pipelines, testing frameworks, 
              and agile project management methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
