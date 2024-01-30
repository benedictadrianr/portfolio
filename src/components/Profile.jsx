import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import node from "../img/node.png";
import react from "../img/react.png";
import tailwind from "../img/tailwind.png";

const list = [
  {
    id: 1,
    name: "html",
    href: html,
    alt: "htm;",
  },
  {
    id: 2,
    name: "css",
    href: css,
    alt: "css",
  },
  {
    id: 3,
    name: "javascript",
    href: javascript,
    alt: "javascript",
  },
  {
    id: 4,
    name: "node",
    href: node,
    alt: "node",
  },
  {
    id: 5,
    name: "react",
    href: react,
    alt: "react",
  },
  {
    id: 6,
    name: "tailwind",
    href: tailwind,
    alt: "tailwind",
  },
];

export default function Profile() {
  return (
    <>
      <div className="bg-[url('img/background.jpg')] w-screen h-screen bg-cover flex flex-row">
        <div className="w-1/2 h-screen flex flex-col justify-center items-center text-right text-white gap-2">
          <h1 className="w-11/12 text-5xl">Hi, I&apos;m Ben</h1>
          <p className="w-11/12 text-xl">
            I&apos;m an aspiring frontend developer
            <br /> who&apos;s looking for a job in the frontend area <br />
            to the right is my skills and proficiency <br />
            check out some of my projects below
          </p>
        </div>
        <div className="w-1/2 h-screen flex justify-centern items-center">
          <ul className="flex gap-2 flex-wrap w-80">
            {list.map((skill) => {
              return (
                <li
                  className="w-24 h-24 rounded-lg border-2 border-black bg-white/5 p-2 flex items-center justify-center"
                  key={skill.id}>
                  <img src={skill.href} alt={skill.alt} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
