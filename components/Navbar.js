import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed left-0 top-0 w-full z-10 ease-in bg-[#1F2937] shadow-xl"
          : "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-[#1F2937]"
      }
    >
      <div className="max-w-[1000px] m-auto flex justify-between items-center p-4">
        <h1 className="logo text-5xl hover:text-orange-500 ease-linear duration-100">
          <Link href="/">KMH</Link>
        </h1>

        <ul className="text-2xl hidden sm:flex">
          <li className="flex">
            <Link href="/#about">
              <span className="p-4 hover:bg-orange-500 rounded-lg cursor-pointer ease-in duration-100">
                about
              </span>
            </Link>
          </li>

          <li className="flex">
            <Link href="/#projects">
              <span className="p-4 hover:bg-orange-500 rounded-lg cursor-pointer ease-in duration-100">
                work
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

        {/* Mobile Navigation */}
        <div
          onClick={handleNav}
          className="block sm:hidden cursor-pointer z-10 ease-in duration-300"
        >
          {mobileNav ? <AiOutlineMenuUnfold size={30} /> :
          <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            mobileNav
              ? "sm:hidden absolute inset-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center text-3xl text-center ease-in duration-100"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex flex-col justify-center items-center w-full text-3xl h-screen bg-zinc-800 text-center ease-in duration-100"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link href="/#about">
                <span className="p-4 hover:underline rounded-lg cursor-pointer ease-in duration-100">
                  about
                </span>
              </Link>
            </li>

            <li onClick={handleNav} className="p-4">
              <Link href="/#projects">
                <span className="p-4 hover:underline rounded-lg cursor-pointer ease-in duration-100">
                  work
                </span>
              </Link>
            </li>

            <li onClick={handleNav} className="p-4">
              <Link href="/contact">
                <span className="p-4 hover:underline rounded-lg cursor-pointer ease-in duration-100">
                  contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
