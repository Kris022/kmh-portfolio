import { FaTools } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

export default function PortfolioWebsitePage() {
  return (
    <div className="h-screen">
      <div className="max-w-[600px] m-auto mt-[30%] md:mt-[10%] text-gray-300">
        <h1 className="text-3xl p-2 font-bold flex">
          Portfolio Website
          <div>
            <a href="https://github.com/Kris022/kmh-portfolio" target="blank">
              <AiOutlineGithub className="ml-3" />
            </a>
          </div>
        </h1>

        <div className="flex border border-white p-3 rounded-full items-center max-w-[75%] mt-1 ml-1 md:justify-center md:m-auto">
          <FaTools className="ml-5" />
          <p className="ml-4">Next.js, React, Tailwindscss</p>
        </div>

        <div className="p-2">
          <p className="mt-5">
            This was my first major project that I have created using a full
            stack framework in form of Next.js. I had done a series of “toy
            programs” before hand, such as a weather app integrating OpenWeather
            API. I’d love to expand on this portfolio in the future, changing up
            the styling, adding more interactive elements to add that
            “wow-effect”, however considering this was my first time building
            full website with next, react and tailwind I am satisfied with how
            it turned out, at least for now.
          </p>

          <p className="mt-5">
            I also worked to make the website responsive. Which is something I
            did not really practise before, but tailwind came in really handy
            with facilitating that process.
          </p>
          <p className="mt-5">
            Overall considering I have learned all these technologies in a span
            of two months I am satisfied with he level I am now, and I look
            forward to expanding my skills and knowledge with future projects.
          </p>
        </div>
      </div>
    </div>
  );
}
