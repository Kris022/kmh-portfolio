import MyTorus from './MyTorus';
import Typed from 'react-typed';

export default function Hero() {
	return (
		<div id="hero" className="h-screen lg:grid lg:grid-cols-2">
			<div className="flex items-center text-4xl justify-center mt-[150px] p-5 lg:p-0 lg:mt-0">
				<h1 className="tracking-wide">
					Hello,<span className="text-gray-400"> I'm </span>
					<span className="font-bold">Kris</span>
					<br />
					<span className="text-gray-400">I like to </span>
					{' '}develop websites/games/applications.{' '}
				</h1>
			</div>
			<div className="mt-20 h-[50%] lg:h-[75%]">
				<MyTorus />
			</div>
		</div>
	);
}
