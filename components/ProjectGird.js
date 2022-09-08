import Link from "next/link";
import Image from "next/image";
import sampleImg from "../public/property.jpg";
import portfolioImg from "../public/portfolio-website.jpg";
import faceRecImg from "../public/opencv-gate.jpg";
import vleImg from "../public/vle.jpg";
import lvlImg from "../public/level-generation.jpg";

export default function ProjectGird() {
  return (
    <div className="w-full">
      <div id="projects" className="max-w-[800px] mx-auto px-2 py-16">
        <h1 className="text-4xl mt-10 p-4">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio Website"
            desc="Next.js, React, Tailwindcss"
            thumbnail={portfolioImg}
            url="/works/portfolio-website/#portfolio-website"
          />
          <ProjectItem
            title="Facial Recognition Gateway"
            desc="Python, OpenCV, TKinter"
            thumbnail={faceRecImg}
            url="/works/portfolio-website/#portfolio-website"
          />
          <ProjectItem
            title="Simple VLE"
            desc="JS, PHP, XAMPP"
            thumbnail={vleImg}
            url="/works/portfolio-website/#portfolio-website"
          />
          <ProjectItem
            title="Procedural Level Generation"
            desc="C++, SFML"
            thumbnail={lvlImg}
            url="/works/portfolio-website/#portfolio-website"
          />
        </div>
      </div>
    </div>
  );
}

const ProjectItem = (props) => {
  const { title, desc, thumbnail, url } = props;

  return (
    <Link href={url}>
      <div className="relative flex flex-col items-center justify-center h-auto w-full p-4 cursor-pointer">
        <div>
          <Image className="rounded-md" src={thumbnail}></Image>
        </div>
        <div className="text-center">
          <h1 className="text-2xl">{title}</h1>
          <p>Technologies:</p>
          <p className="italic text-xl">{desc}</p>
        </div>
      </div>
    </Link>
  );
};
