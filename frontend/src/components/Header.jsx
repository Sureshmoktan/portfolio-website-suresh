export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Suresh <span className="text-blue-600">Moktan</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 transform hover:scale-110 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
