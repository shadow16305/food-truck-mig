import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Hamburger from "./hamburger";

export const MainNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-dark-red absolute lg:relative z-50">
        <div className={cn("w-[86%] mx-auto relative z-50 font-[mrAlex]")}>
          <div className="w-16 h-32 lg:w-[120px] lg:h-[190px] absolute left-0 -top-4 lg:-top-1">
            <img src="src/assets/images/logo.svg" alt="logo" className="absolute left-0 top-0" />
          </div>
          <ul className="items-center justify-end gap-x-12 text-neutral-300 py-3 hidden lg:flex">
            <li className="hover:text-white transition-colors">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#menu">Menu</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#catering">Catering</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#contact">Contact</a>
            </li>
            <li className="text-dark-red">
              <button className="bg-neutral-300 px-5 py-3 rounded-3xl hover:bg-neutral-200 transition-colors">
                Order now
              </button>
            </li>
          </ul>
          <div className="flex justify-end">
            <Hamburger isOpen={open} setIsOpen={setOpen} />
          </div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: open ? "auto" : 0 }}
          exit={{ height: 0 }}
          className="overflow-hidden">
          <ul className={cn("flex flex-col items-center justify-center gap-y-4 text-neutral-300 pt-3 pb-5 text-xl")}>
            <li className="hover:text-white transition-colors">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#menu">Menu</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#catering">Catering</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#contact">Contact</a>
            </li>
            <div className="w-11/12 bg-yellow-cus h-px"></div>
            <li className="text-dark-red w-11/12">
              <button className="bg-neutral-300 w-full py-3 rounded-3xl hover:bg-neutral-200 transition-colors">
                Order now
              </button>
            </li>
          </ul>
        </motion.div>
      </nav>
      {open && <div className="w-screen h-screen z-40 absolute inset-0" onClick={() => setOpen(false)} />}
    </>
  );
};
