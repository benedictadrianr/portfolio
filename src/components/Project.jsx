import undangan from "../img/undangan-pernikahan-digital.png";
import netflix from "../img/netflix.jpg";
import bmi from "../img/bmi.jpg";
import mushroom from "../img/mushroom.png";
import tribute from "../img/tribute.jpg";
import landingpage from "../img/landingpage.jpg";
import ring from "../img/ring.png";
import nflixLogo from "../img/nflixLogo.png";
import calculator from "../img/calculator.png";
import console from "../img/console.png";
import profile from "../img/profile.png";
import musicNote from "../img/musicNote.png";

const projects = [
  {
    id: 1,
    name: "Wedding Invitation",
    href: "https://benedictadrianr.github.io/Undangan-Pernikahan-Digital/",
    src: undangan,
    logoSrc: ring,
    alt: "undangan",
  },
  {
    id: 2,
    name: "Nflix Landing Page",
    href: "https://benedictadrianr.github.io/nflixlandpage/",
    src: netflix,
    logoSrc: nflixLogo,
    alt: "nflix",
  },
  {
    id: 3,
    name: "Body Mass Index Calculator",
    href: "https://revou-fundamental-course.github.io/10-jul-23-rianrich123/",
    src: bmi,
    logoSrc: calculator,
    alt: "bmi",
  },
  {
    id: 4,
    name: "Gameshop Website",
    href: "https://benedictadrianr.github.io/mushroom-gaming",
    src: mushroom,
    logoSrc: console,
    alt: "mushroom",
  },
  {
    id: 5,
    name: "Biography",
    href: "https://benedictadrianr.github.io/stephen-king-tribute-page/",
    src: tribute,
    logoSrc: profile,
    alt: "tribute",
  },
  {
    id: 6,
    name: "Trombone Landing Page",
    href: "https://benedictadrianr.github.io/product-landing-page/",
    src: landingpage,
    logoSrc: musicNote,
    alt: "landingpage",
  },
];

export default function Project() {
  return (
    <ul
      id="project"
      className="w-screen min-h-screen grid grid-cols-1 gap-1 bg-[#0D1013] -z-50 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            style={{ backgroundImage: `url(${project.src})` }}
            className="card bg-center bg-cover rounded-[20px] transition-all min-h-[200px]">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              style={{ boxShadow: "inset 0 -70px 12px 0 #00000080" }}
              className="background bg-[#171D25]/65 w-full h-full transition flex justify-center items-center text-xl cursor-pointer rounded-xl relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 logo transition-all">
                <img
                  src={project.logoSrc}
                  className="h-[80px]"
                  alt="project logo"
                />
              </div>
              <div className="title absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-mono transition-all w-full text-center">
                {project.name}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
