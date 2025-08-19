export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left: Name / Branding */}
          <div className="text-lg font-semibold">
            © {new Date().getFullYear()} <span className="text-blue-500">Suresh Moktan</span>
          </div>
  
          {/* Center: Quick Links (scrolling to sections) */}
          <nav className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
  
          {/* Right: Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  