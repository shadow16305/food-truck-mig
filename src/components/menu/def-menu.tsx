import { menu } from "../../constants/content";
import { cn } from "../../lib/utils";

export const DefMenu = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-10 lg:gap-y-20">
      {menu.map((item, index) => (
        <div
          key={index}
          className={cn("flex flex-col-reverse lg:flex-row justify-between gap-x-4 items-center lg:w-[46%] xl:w-5/12")}>
          <div className="lg:space-y-2">
            <div className="flex gap-x-1 items-center justify-center lg:justify-start">
              <p className="text-[28px] font-medium whitespace-nowrap">{item.name}</p>
              <span className="text-red-cus font-bold hidden lg:block whitespace-nowrap">$ {item.price}</span>
            </div>
            <p className="text-dark-red max-w-[320px] text-center lg:text-start">{item.description}</p>
            <span className="text-red-cus font-bold lg:hidden flex justify-center whitespace-nowrap">
              $ {item.price}
            </span>
          </div>
          <img src={item.imgSrc} alt={item.name} width={193} height={140} />
        </div>
      ))}
    </div>
  );
};
