import { FaTools } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectHeader(props) {
  const { title, tools, gitlink } = props;

  return (
    <div>
      <h1 className="text-3xl p-2 font-bold flex">
        {title}
        <div>
          <a href={gitlink} target="blank">
            <AiOutlineGithub className="ml-3" />
          </a>
        </div>
      </h1>

      <div className="flex border border-white p-3 rounded-full items-center max-w-[75%] mt-1 ml-1 md:justify-center md:m-auto">
        <FaTools className="ml-5" />
        <p className="ml-4">{tools}</p>
      </div>
    </div>
  );
}
