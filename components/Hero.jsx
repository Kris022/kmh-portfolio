import MyTorus from "./MyTorus";

export default function Hero() {
  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center mt-[150px] p-5 lg:p-0 lg:mt-0">
        <h1 className="text-4xl">
          Hello, I'm <span className="font-bold">Kris</span>
          <br />
          I'm a software developer.
        </h1>
      </div>
      <div className="mt-20 h-[50%] lg:h-[75%]">
        <MyTorus />
      </div>
     
    </div>
  );
}
