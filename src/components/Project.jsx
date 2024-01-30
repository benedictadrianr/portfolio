import undangan from "../img/undangan-pernikahan-digital.png";
import netflix from "../img/netflix.jpg";
import bmi from "../img/bmi.jpg";
import regis from "../img/regis.jpg";
import tribute from "../img/tribute.jpg";
import landingpage from "../img/landingpage.jpg";

const projects = [
  {
    id: 1,
    name: "Undangan Pernikahan Digital",
    href: "https://rianrich123.github.io/Undangan-Pernikahan-Digital/",
    src: undangan,
    alt: "undangan",
  },
  {
    id: 2,
    name: "Netflix Landing Page Clone",
    href: "https://rianrich123.github.io/netflixlandpage/",
    src: netflix,
    alt: "netflix",
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
    name: "Registration Form",
    href: "https://rianrich123.github.io/regis/",
    src: regis,
    alt: "regis",
  },
  {
    id: 5,
    name: "Stephen King's Tribute Page",
    href: "https://rianrich123.github.io/stephen-king-tribute-page/",
    src: tribute,
    alt: "tribute",
  },
  {
    id: 6,
    name: "Original Trombones Landing Page",
    href: "https://rianrich123.github.io/product-landing-page/",
    src: landingpage,
    alt: "landingpage",
  },
];

export default function Project() {
  return (
    <div className="w-screen h-screen grid grid-cols-3">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            style={{ backgroundImage: `url(${project.src})` }}
            className={`bg-cover bg-center`}>
            <a
              href={project.href}
              className="bg-white/25 opacity-0 backdrop-blur hover:opacity-100 w-full h-full transition flex justify-center items-center text-xl cursor-pointer">
              {project.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
