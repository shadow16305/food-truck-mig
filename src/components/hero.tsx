import { cn } from "../lib/utils";

export const Hero = () => {
  return (
    <section className="bg-yellow-cus relative pt-32 pb-20 lg:pt-[187px] lg:pb-[70px]">
      <div className="max-w-[91%] lg:max-w-[86%] mx-auto flex items-center h-full">
        <div className="max-w-[600px] md:w-1/2 flex flex-col">
          <span className={cn("text-[22px] font-medium")}>Genuine Flavors in Every Bite</span>
          <h1 className={cn("text-3xl lg:text-6xl text-red-cus mt-2 font-[mrAlex]")}>
            Authentic turkish street sandwiches
          </h1>
          <p className="text-dark-red/70 lg:text-xl tracking-[0.5px] leading-[32px] mt-6">
            Welcome to Atlas Turkish Cuisine, where we bring the vibrant flavors of Turkey straight to you! Our wraps
            are crafted with premium, halal beef and wrapped in soft, freshly baked flatbreads.
          </p>
          <div className={cn("flex lg:flex-col gap-6 mt-6 font-[mrAlex]")}>
            <a
              href="#menu"
              className="bg-red-cus py-3 w-32 lg:w-56 text-center rounded-lg text-neutral-300 hover:bg-red-600 transition-colors">
              See the menu
            </a>
            <a
              href="#contact"
              className="bg-red-cus py-3 w-32 rounded-lg lg:w-56 text-center text-neutral-300 hover:bg-red-600 transition-colors">
              Book catering
            </a>
          </div>
        </div>
      </div>
      <div className="w-[49%] h-full absolute top-0 right-0 hidden md:block">
        <img
          src="src/assets/images/hero-img.jpg"
          alt="hero image"
          className="object-cover absolute rounded-l-[261px] size-full"
        />
      </div>
    </section>
  );
};
