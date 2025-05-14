import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-white/5 border-t border-cyan-400 shadow-inner shadow-cyan-500/10 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} Divyesh Singh Gehlot. All rights reserved.</p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/divyesh-singh-gehlot"
            target="_blank"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyesh-singh-gehlot-792055295/"
            target="_blank"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:gehlotdivyeshsingh@gmail.com"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
