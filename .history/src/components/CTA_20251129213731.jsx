import { Mail, Phone, Linkedin, Facebook, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Interested in working together?
        </h2>
        <p className="text-xl text-blue-50 mb-8 leading-relaxed">
          Feel free to reach out! Whether you have a project in mind, need technical consultation, or just want to connect, I'd love to hear from you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://linkedin.com/in/mohamed-bouderba-4ba74a351/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
          >
            <Linkedin size={20} />
            Contact Me on LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bouderbamohamed99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cyan-600 transition transform hover:scale-105"
          >
            <Mail size={20} />
            Send me an Email
          </a>
        </div>

        {/* Contact Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bouderbamohamed99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <Mail className="text-blue-50" size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Email</p>
                <p className="font-semibold text-white break-all">bouderbamohamed99@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+213796497579"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <Phone className="text-blue-50" size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Phone</p>
                <p className="font-semibold text-white">+213 796-497-579</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 p-4 bg-white/5 rounded-lg">
              <a
                href="https://linkedin.com/in/mohamed-bouderba-4ba74a351/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="https://facebook.com/bdm.mohame"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition transform hover:scale-110"
                title="Facebook"
              >
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
