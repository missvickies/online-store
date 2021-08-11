import { ChevronRightIcon } from "@heroicons/react/solid";
export const Post = ({ title, summary, id, img }) => {
  return (
    <div className="p-28 mt-20 overflow-scroll">
      <p> 0{id}. </p>
      <img src={img} />
      <br></br>
      <div className=" border-b-4 w-12"></div>
      <p className="mt-8">{title}</p>
      <button className="border border-transparent flex items-center">
        {" "}
        Know more
        <ChevronRightIcon className="h-5 w-5 " />
      </button>
    </div>
  );
};
