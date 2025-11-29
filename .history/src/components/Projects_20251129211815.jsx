import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Citizen Complaints Portal for Mascara Province',
      description: 'Developed a full-stack web portal to streamline the process for citizens to submit and track complaints and grievances to the local government. This platform improved transparency and response efficiency for public services.',
      technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
      image: '/citizen-portal.jpg',
    },
    {
      id: 2,
      title: 'Vehicle Gray Card Management System',
      description: 'Engineered a secure and reliable management system for handling vehicle registration documents ("Gray Cards") at the state level. The system automates workflows, reduces manual paperwork, and enhances data accuracy for the Department of Motor Vehicles in Mascara.',
      technologies: ['Laravel', 'JavaScript', 'Tailwind CSS'],
      image: '/gray-card.jpg',
    },
    {
      id: 3,
      title: 'Employee & Leave Management Application',
      description: 'Built an internal web application for managing employee records, tracking annual leave requests, and streamlining HR approval processes. This led to a more organized and efficient administrative workflow.',
      technologies: ['Laravel', 'React', 'Node.js'],
      image: '/hr-management.jpg',
    },
    {
      id: 4,
      title: 'Annual Inventory Management System',
      description: 'Created a comprehensive application for conducting and managing annual inventory audits. The system facilitates stock tracking, reporting, and data analysis for accurate asset management.',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
      image: '/inventory.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">A showcase of critical applications built for government and enterprise sectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-slate-600 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Details & Screenshots
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 bg-slate-700 border-b border-slate-600">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Placeholder for Screenshots (removed text as requested) */}
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center" aria-hidden="true">
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Description</h4>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
