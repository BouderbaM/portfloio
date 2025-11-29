import { Heart, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Mohamed Bouderba</h3>
            <p className="text-gray-400">Full-Stack Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/mohamed-bouderba-4ba74a351/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com/bdm.mohame"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="mailto:bouderbamohamed99@gmail.com"
              className="p-3 bg-slate-800 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition"
              title="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1 mb-2">
            Made with <Heart size={16} className="text-cyan-400" /> by Mohamed Bouderba
          </p>
          <p>&copy; {currentYear} Mohamed Bouderba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
