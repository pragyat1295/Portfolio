const Projects = () => {
  const projects = [
    {
      title: 'Travel Web App',
      description: 'A comprehensive travel planning application where users can add, edit, and visualize their routes on an interactive map. Features route management with detailed information display.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'JavaScript', 'Bootstrap', 'React Leaflet', 'Git'],
      features: [
        'Interactive map integration with React Leaflet',
        'Route planning and management system',
        'Add/edit route functionality',
        'Responsive design with Bootstrap',
        'Real-time route visualization'
      ],
      liveDemo: 'https://pragyat1295.github.io/travel-app/',
      github: 'https://github.com/pragyat1295/travel-app',
      category: 'Web Application'
    },
    {
      title: 'JWT Token Validation System',
      description: 'A secure authentication system focusing on JWT token generation and validation without backend dependencies. Utilizes local storage for client-side token management.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'JavaScript', 'Bootstrap', 'JWT', 'Local Storage'],
      features: [
        'Client-side JWT token generation',
        'Token validation and verification',
        'Local storage implementation',
        'Secure authentication flow',
        'Responsive user interface'
      ],
      liveDemo: 'https://pragyat1295.github.io/jwt-token-project/',
      github: 'https://github.com/pragyat1295/jwt-token-project',
      category: 'Authentication'
    },
    {
      title: 'Weather Forecast Dashboard',
      description: 'A comprehensive weather application displaying city details with rich data visualization. Features interactive charts and detailed weather information with lazy loading optimization.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'JavaScript', 'MUI', 'Chart.js', 'React Leaflet', 'Vercel'],
      features: [
        'City-based weather information',
        'Interactive charts and graphs',
        'Comprehensive weather data display',
        'Lazy loading for performance',
        'Material-UI design system',
        'Map integration for location display'
      ],
      liveDemo: 'https://weather-app-mu-six-26.vercel.app/',
      github: 'https://github.com/pragyat1295/weather-app',
      category: 'Data Visualization'
    }
  ]

  const professionalProjects = [
    {
      title: 'AIB Mobile Banking App',
      company: 'Globant India (Client: AIB)',
      description: 'Mobile banking application for Allied Irish Bank serving iOS and Android users with secure financial services.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Expo-CLI'],
      achievements: [
        'Implemented smooth onboarding for non-registered users',
        'Developed modular components for consistent UX',
        'Built secure fund transfer functionality',
        'Added multilingual support for broader reach',
        'Ensured 20-hour daily uptime reliability'
      ],
      category: 'Mobile Banking'
    },
    {
      title: 'Vehicle Management Dashboard',
      company: 'Intangles Lab',
      description: 'Comprehensive fleet management system handling 30,000+ daily records and 500,000+ historical entries.',
      technologies: ['React.js', 'Redux Toolkit', 'TypeScript', 'MUI', 'Google Maps APIs'],
      achievements: [
        'Built real-time vehicle tracking system',
        'Implemented boundary algorithms with Google Polyline',
        'Created cross-platform solutions for 10,000+ vehicles',
        'Automated workflows increasing efficiency by 30%',
        'Developed dynamic UI with filters and pagination'
      ],
      category: 'Fleet Management'
    },
    {
      title: 'KAGAMY Work Management System',
      company: 'DG Takano (Japan)',
      description: 'Full-cycle project management system built from scratch for enterprise use across 10+ departments.',
      technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Bootstrap'],
      achievements: [
        'Collaborated with C-level stakeholders',
        'Implemented user-role hierarchy system',
        'Improved project efficiency by 13%',
        'Built responsive dashboard interface',
        'Optimized data pipelines reducing processing time by 25%'
      ],
      category: 'Enterprise Software'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of personal and professional projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Personal Projects</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden card-shadow hover:scale-105 transition-transform duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <div className="text-primary-600">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Projects</h3>
          <div className="space-y-6">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 card-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-primary-600 mb-2">
                      {project.company}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h5>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, achIndex) => (
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
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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
      </div>
    </section>
  )
}

export default Projects
