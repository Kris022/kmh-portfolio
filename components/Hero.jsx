import MyTorus from './MyTorus'

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen">
      <MyTorus />
      
      <div>
        <h1 className="text-5xl">
          Hello, I'm <span className="font-bold">Kris</span>
        </h1>
        <h1 className="text-5xl">I'm a software developer.</h1>
      </div>

      
    

    </div>
  );
}
