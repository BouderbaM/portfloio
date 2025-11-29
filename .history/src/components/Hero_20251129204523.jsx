import { User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Mohamed Bouderba
              </h1>
              <p className="text-xl sm:text-2xl text-cyan-400 font-semibold">
                Full-Stack Software Engineer
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              A dedicated Software Engineer with <span className="text-cyan-400 font-semibold">5 years of experience</span> in developing robust web applications for both government and private sectors. Proficient in the entire web development lifecycle, from concept to deployment and maintenance on Linux servers.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              I am passionate and results-driven, specializing in building <span className="text-white font-semibold">efficient and scalable full-stack web applications</span>. With a strong foundation in both front-end and back-end technologies, I have successfully delivered several critical projects, including government portals and enterprise management systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:bouderbamohamed99@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/mohamed-bouderba-4ba74a351/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition"
              >
                View on LinkedIn
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex justify-center">
            <img
              src="/headshot.jpg"
              alt="Mohamed Bouderba"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg shadow-lg hover:shadow-2xl transition object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
