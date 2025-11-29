import { Code, Database, Server, Network } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Back-end',
      skills: ['PHP', 'Laravel', 'Node.js'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Code,
      title: 'Front-end',
      skills: ['JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Server,
      title: 'Systems & DevOps',
      skills: ['Linux (AlmaLinux)', 'Web Server Hosting', 'Server Management'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Network,
      title: 'Other',
      skills: ['Computer Networks', 'Telephony Networks', 'Web Architecture'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Expertise across the full stack of modern web development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
