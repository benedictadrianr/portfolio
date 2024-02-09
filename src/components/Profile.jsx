import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import node from "../img/node.png";
import react from "../img/react.png";
import tailwind from "../img/tailwind.png";
import bootstrap from "../img/bootstrap.png";
import downArrow from "../img/down-arrow.png";

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
  {
    id: 7,
    name: "bootstrap",
    href: bootstrap,
    alt: "bootstrap",
  },
];

export default function Profile() {
  return (
    <>
      <div
        id="profile"
        className="bg-gradient-to-b from-[#171D25] to-[#0D1013] w-screen h-screen -z-50 flex flex-col justify-center items-center relative gap-4">
        <div className="absolute w-[346px] h-[346px] rounded-full border-[#00F7FF] border-[19px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl -z-40"></div>
        <div className="absolute w-[270px] h-[270px] rounded-full bg-[#00F7FF] -bottom-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40"></div>
        <div className="absolute w-[170px] h-[170px] rounded-full bg-[#00F7FF] top-48 -right-24 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40"></div>
        <div className="w-[307px] flex flex-col justify-center items-center text-center text-white gap-2 font-mono overflow-hidden">
          <div className="flex flex-row justify-start items-center font-mono w-full relative text-[32px]">
            <h1 className="">Hi 👋, I&apos;m</h1>
            <h1 className="profile-name absolute right-0 top-0 h-5 text-start">
              Ben <br />
              Rian <br />
              Adrian
            </h1>
          </div>
        </div>
        <p className="max-w-[448px] text-xl text-white font-mono text-center">
          I&apos;m an aspiring frontend developer, who&apos;s looking for a job
          in the frontend area. below is my skills and proficiency <br />
        </p>
        <div className="flex justify-centern items-center">
          <ul className="flex gap-2 flex-wrap justify-center">
            {list.map((skill) => {
              return (
                <li
                  className="w-[68px] h-[68px] text-white text-[10px] rounded-[16px] bg-[#171D25] p-2 flex items-center justify-center font-mono flex-col gap-1"
                  style={{ boxShadow: "inset 0 -2px 3px 0 #178F98" }}
                  key={skill.id}>
                  <img className="h-[35px]" src={skill.href} alt={skill.alt} />
                  <p>{skill.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-white font-mono absolute left-1/2 bottom-0 -translate-x-1/2 flex justify-center flex-col items-center">
          <h2 className="min-w-[238px]">Check out my projects below</h2>
          <img src={downArrow} alt="down arrow" className="w-20" />
        </div>
      </div>
    </>
  );
}
