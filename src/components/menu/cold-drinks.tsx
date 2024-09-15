import { cold_drinks } from "../../constants/content";
import { cn } from "../../lib/utils";

export const ColdDrinks = () => {
  return (
    <ul className="space-y-3">
      {cold_drinks.map((drink) => (
        <li key={drink.name} className={cn("flex items-center gap-x-2")}>
          <p className="text-dark-red text-2xl lg:text-[1.75rem] font-medium">{drink.name}</p>
          <span className="text-red-cus font-bold">$ {drink.price}</span>
        </li>
      ))}
      <p className="text-dark-red italic text-xl">Traditional Turkish yogurt drink.</p>
    </ul>
  );
};
