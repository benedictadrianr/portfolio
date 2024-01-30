export default function Navbar() {
  return (
    <nav className="bg-white/5 w-screen h-20 flex justify-between py-6 px-12 fixed top-0 backdrop-blur z-50">
      <div className="">Logo</div>
      <div className="w-full max-w-xs">
        <ul className="flex flex-row justify-between">
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
