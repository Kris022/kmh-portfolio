import ProjectHeader from "../../components/works/ProjectHeader";

export default function PortfolioWebsitePage() {
  return (
    <div className="h-screen">
      <div className="max-w-[600px] m-auto mt-[30%] md:mt-[10%] text-gray-300 text-xl">
     
        <ProjectHeader
          title="Portfolio Website"
          tools="Next.js, React, Tailwindscss"
          gitlink="https://github.com/Kris022/kmh-portfolio"
        />

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
        </div>
      </div>
    </div>
  );
}
