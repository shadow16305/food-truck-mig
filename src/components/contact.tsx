import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Form } from "./form/form";

export const Contact = () => {
  return (
    <section className="mt-20 lg:mt-52 w-11/12 lg:w-[86%] mx-auto space-y-12" id="contact">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className="text-red-cus font-[mrAlex]">CONTACT</span>
        <h5 className="text-[2rem] font-bold text-dark-red">Setup The Event</h5>
        <p className="text-neutral-cus">
          Fill out the form below, and we'll handle the rest. From menu planning to setup, we've got your event covered!
        </p>
      </div>
      <div className="w-full ring-1 ring-neutral-200 rounded-lg flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-dark-red flex flex-col text-neutral-300 px-24 py-[70px] space-y-[70px] rounded-lg">
          <div className="flex flex-col items-center gap-y-4">
            <FiPhone size={60} />
            <p className="whitespace-nowrap">+1 ( 416) 388-5847</p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <MdOutlineEmail size={60} />
            <a href="mailto:atlasturkishcuisine@gmail.com">atlasturkishcuisine@gmail.com</a>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <IoLocationOutline size={60} />
            <p>ON/CA</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
