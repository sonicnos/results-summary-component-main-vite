import Score from "./Score";

const Left = ({ reaction, memory, verbal, visual, className }) => {
  const average = Math.floor((reaction + memory + verbal + visual) / 4);

  return (
    <div className={className}>
      <h1 className="text-2xl text-gray-300 font-semibold mb-9">Your Result</h1>
      <div className="flex justify-center h-[200px] mb-10">
        <Score
          average={average}
          className=" rounded-full h-full w-[200px] flex justify-center gap-3 items-center flex-col bg-gradient-to-t from-[#4835f1] to-[#4d23cd]"
        />
      </div>
      <h2 className="text-3xl font-medium text-white mb-4">Great</h2>
      <p className="w-4/6 text-gray-300 text-md font-semibold m-auto text-center">
        {`Your scored higher than 65% of the
        people who have taken these tests.`}
      </p>
    </div>
  );
};

export default Left;
