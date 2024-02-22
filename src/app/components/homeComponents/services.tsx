import React from "react";
import { servicedata } from "@/app/utils/data";
import { TbUvIndex } from "react-icons/tb";
import { roboto } from "@/app/utils/fonts";
type ServiceType = {
  number: number;
  title: string;
  description: string;
};
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center md:my-[10%] items-center px-[5%]">
      <div className="flex w-full mb-5 place-content-center">
        <p className=" text-[32px] text-center md:text-[64px] text-white ">
          <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> you
          can trust me with
        </p>
      </div>
      {servicedata.map((service, index) => (
        <ServiceItem
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;

const ServiceItem = (service: ServiceType) => {
  return (
    <div className="w-full group/link hover:bg-[#D2BEB5] px-1 md:py-5 flex justify-center items-center gap-5 md:gap-10 my-[5%] h-[25%]">
      <div className=" group-hover/link:text-[#1E1917] text-[#D87C4F] pt-6 md:mt-0 flex  h-[15vh] md:h-[25vh] justify-center md:items-center text-[32px] md:text-[96px]">
        <p>0</p>
        <p>{service.number}</p>
      </div>
      <div className=" w-[5px] md:w-[9px] bg-white  h-[15vh] md:h-[25vh]"></div>
      <div className="flex flex-col justify-center items-start h-[25vh] w-3/4 md:w-1/2">
        <h3
          className={`group-hover/link:text-[#1E1917]  ${roboto.className} text-[#D2BEA5] hover:text-[#1E1917] text-[16px] md:text-[24px]`}
        >
          {service.title}
        </h3>
        <p
          className={`text-white text-[12px] md:text-[12px] ${roboto.className}`}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};
