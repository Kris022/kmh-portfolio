import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1000px] m-auto flex justify-between items-center p-4">
        <h1 className="logo text-5xl">
          <Link href="/">KMH</Link>
        </h1>

        <ul className="flex text-2xl">
          <li className="flex">
            <Link href="/work">
              <span className="p-4 hover:bg-orange-500 rounded-lg cursor-pointer ease-in duration-100">
                work
              </span>
            </Link>
          </li>

          <li className="flex">
            <Link href="/#about">
              <span className="p-4 hover:bg-orange-500 rounded-lg cursor-pointer ease-in duration-100">
                about
              </span>
            </Link>
          </li>

          <Link href="/contact">
            <li className="flex">
              <span className="p-4 hover:bg-orange-500 rounded-lg cursor-pointer ease-in duration-100">
                contact
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
