import MyTorus from "./MyTorus";
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center text-4xl justify-center mt-[150px] p-5 lg:p-0 lg:mt-0">
        <h1>
          <Typed strings={["Hello, I'm Kris <br /> I like to type this."]} typeSpeed={130} backSpeed={130} />          
        </h1>
      </div>
      <div className="mt-20 h-[50%] lg:h-[75%]">
        <MyTorus />
      </div>
     
    </div>
  );
}
