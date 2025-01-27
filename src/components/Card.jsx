import Left from "./Left";
import Right from "./Right";

const Card = ({ reaction, memory, verbal, visual, className }) => {
  return (
    <div className={className}>
      <Left
        className="pt-11 pb-12 sm:w-1/2 h-full sm:rounded-4xl bg-gradient-to-b from-[#6a44fc] to-[#322bed] text-center rounded-b-4xl"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
      <Right
        className="px-12 pt-11 pb-12 sm:w-1/2 h-full sm:rounded-4xl w-full"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
    </div>
  );
};

export default Card;
