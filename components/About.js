import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function About() {
  return (
    <div id="about" className="max-w-[1000px] h-screen m-auto flex flex-col">

      <div className="mt-[20%] p-4">
        <h1 className="text-4xl">About</h1>
        <p className="text-xl mt-4">
          Currently on the last year of a Computer Science degree at a UK
          university. I will be graduating in 2023 and hope to do my Master’s
          soon after.
        </p>
        <p className="text-xl mt-3">
          Part time I work as a programing tutor for an educational start up
          firm.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-[22%] md:mt-[10%]">
        <a href="https://github.com/Kris022" target="blank">
          <AiOutlineGithub size={70} />
          <p>GitHub</p>
        </a>
      </div>

    </div>
  );
}
