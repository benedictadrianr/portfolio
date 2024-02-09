export default function Navbar() {
  return (
    <nav className="bg-black/50 w-screen h-20 flex justify-between py-6 px-6 sm:px-12 fixed top-0 backdrop-blur z-50">
      <div className="mr-6">Logo</div>
      <div className="w-full max-w-xs">
        <ul className="flex flex-row justify-between text-white font-mono">
          <li>
            <a
              className="transition-all ease-in-out hover:text-blue-600"
              href="#profile">
              Profile
            </a>
          </li>
          <li>
            <a
              className="transition-all ease-in-out hover:text-blue-600"
              href="#project">
              Project
            </a>
          </li>
          <li>
            <a
              className="transition-all ease-in-out hover:text-blue-600"
              href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
