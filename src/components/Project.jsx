import undangan from "../img/undangan-pernikahan-digital.png";
import netflix from "../img/netflix.jpg";
import bmi from "../img/bmi.jpg";
import mushroom from "../img/mushroom.png";
import tribute from "../img/tribute.jpg";
import landingpage from "../img/landingpage.jpg";

const projects = [
  {
    id: 1,
    name: "Undangan Pernikahan Digital",
    href: "https://benedictadrianr.github.io/Undangan-Pernikahan-Digital/",
    src: undangan,
    alt: "undangan",
  },
  {
    id: 2,
    name: "Nflix Landing Page",
    href: "https://benedictadrianr.github.io/nflixlandpage/",
    src: netflix,
    alt: "nflix",
  },
  {
    id: 3,
    name: "Body Mass Index Calculator",
    href: "https://revou-fundamental-course.github.io/10-jul-23-rianrich123/",
    src: bmi,
    alt: "bmi",
  },
  {
    id: 4,
    name: "Mushroom Gaming Demo Site",
    href: "https://benedictadrianr.github.io/mushroom-gaming",
    src: mushroom,
    alt: "mushroom",
  },
  {
    id: 5,
    name: "Stephen King's Tribute Page",
    href: "https://benedictadrianr.github.io/stephen-king-tribute-page/",
    src: tribute,
    alt: "tribute",
  },
  {
    id: 6,
    name: "Original Trombones Landing Page",
    href: "https://benedictadrianr.github.io/product-landing-page/",
    src: landingpage,
    alt: "landingpage",
  },
];

export default function Project() {
  return (
    <ul
      id="project"
      className="w-screen h-screen grid grid-cols-3 gap-4 p-4 bg-[#2d3134]">
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            style={{ backgroundImage: `url(${project.src})` }}
            className="card bg-cover rounded-xl">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="background bg-[#2d3134]/80 backdrop-blur w-full h-full transition flex justify-center items-center text-xl cursor-pointer rounded-xl relative opacity-0 hover:opacity-100">
              <div className="title absolute top-0 left-1/2 translate-x-[-50%] text-white font-mono transition-all ease-out w-full text-center cursor-pointer">
                {project.name}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
