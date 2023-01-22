import { useEffect } from "react";
interface Props {
  day: string;
  changeDay: (d: any) => any;
  isactive: boolean;
}

const ACTIVE = "border-[3px]  bg-white text-[#f44142] shadow-lg border-black";
const EventDays = ({ day, changeDay, isactive }: Props) => {
  useEffect(() => {}, []);
  return (
    <div
      className={`${
        isactive ? ACTIVE : ""
      } px-8    h-14 lg:h-16 font-semibold rounded-lg   text-3xl lg:text-4xl text-center  flex justify-center items-center hover:scale-105 transition-[transform] duration-100`}
    >
      {" "}
      <span
        className=" tracking-wider drop-shadow-lightbold cursor-pointer"
        onClick={() => {
          changeDay(day);
        }}
      >
        {" "}
        DAY {day}
      </span>
    </div>
  );
};

export default EventDays;
