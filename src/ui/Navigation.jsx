const navLinks = [
  {
    linkName: "Link",
    url: "/",
    description: "Go to",
  },
  {
    linkName: "Link",
    url: "/",
    description: "Go to",
  },
  {
    linkName: "Link",
    url: "/",
    description: "Go to",
  },
  {
    linkName: "Link",
    url: "/",
    description: "Go to",
  },
];

// Main navigation
export default function Navigation() {
  return (
    <nav
      className="w-full bg-white/60 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between w-11/12 mx-auto sm:px-8 py-4">
        {/* Logo link */}
        <a
          href="/"
          className="uppercase font-bold text-2xl"
          aria-label="Go to home page"
        >
          welcome lyon
        </a>

        {/* Navigation link list */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.linkName + index}>
              {/* Navigation link */}
              <a
                href={link.url}
                className="sm:text-lg font-bold text-cyan-600 hover:text-cyan-800 transition-colors duration-300"
              >
                {link.linkName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
