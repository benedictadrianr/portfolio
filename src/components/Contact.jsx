import github from "../img/github.png";
import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#0D1013] w-screen h-32 flex justify-center items-center flex-col gap-2">
      <h1 className="font-mono text-white">Here&apos;s my Contacts!</h1>
      <ul className="flex flex-row gap-2">
        <li>
          <a
            href="https://github.com/rianrich123"
            rel="noreferrer"
            target="_blank">
            <img className="w-10" src={github} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/benedictadrianr?igsh=bG9ua3NsNHE1MDFp"
            rel="noreferrer"
            target="_blank">
            <img className="w-10" src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benedictadrianr/"
            rel="noreferrer"
            target="_blank">
            <img className="w-10" src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
