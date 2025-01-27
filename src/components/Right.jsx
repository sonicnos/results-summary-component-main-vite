import Button from "./Button";
import ResultCategory from "./ResultCategory";
import iconMemory from "../../public/icon-memory.svg";
import iconReaction from "../../public/icon-reaction.svg";
import iconVerbal from "../../public/icon-verbal.svg";
import iconVisual from "../../public/icon-visual.svg";

const Right = ({ reaction, memory, verbal, visual, className }) => {
  return (
    <div className={className}>
      <h1 className="font-medium text-2xl">Summary</h1>
      <div className="flex flex-col gap-5 h-[21rem] pt-12 sm:w-[250px] pb-12 w-full">
        <ResultCategory reaction={reaction} icon={iconReaction} />
        <ResultCategory memory={memory} icon={iconMemory} />
        <ResultCategory verbal={verbal} icon={iconVerbal} />
        <ResultCategory visual={visual} icon={iconVisual} />
      </div>

      <Button className="bg-[#303b59] cursor-pointer text-white font-semibold flex justify-center items-center sm:w-[17.5rem] h-14 rounded-4xl transition duration-600 ease-in-out hover:bg-gradient-to-b from-[#6641ff] to-[#382ded] w-full">
        Continue
      </Button>
    </div>
  );
};

export default Right;
