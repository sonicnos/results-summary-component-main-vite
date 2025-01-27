import Left from "./Left";
import Right from "./Right";

const Card = ({ reaction, memory, verbal, visual, className }) => {
  return (
    <div className={className}>
      <Left
        className="pt-11 pb-12 w-1/2 h-full rounded-4xl bg-gradient-to-b from-[#6a44fc] to-[#322bed] text-center"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
      <Right
        className="pl-12 pt-11 pb-12 w-1/2 h-full rounded-4xl"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
    </div>
  );
};

export default Card;
