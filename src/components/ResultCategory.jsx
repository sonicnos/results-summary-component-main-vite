const ResultCategory = ({ reaction, memory, verbal, visual, icon }) => {
  return (
    <>
      {reaction ? (
        <p className="flex justify-between w-[280px] h-14 items-center bg-red-50 rounded-md px-5 font-semibold">
          <div className="flex gap-3 items-center text-red-500">
            <img src={icon} alt="icon" className="h-5" />
            Reaction
          </div>
          <div>
            {reaction} <span className="text-gray-400">/ 100</span>
          </div>
        </p>
      ) : (
        ""
      )}
      {memory ? (
        <p className="flex justify-between w-[280px] h-14 items-center bg-yellow-50 rounded-md px-5 font-semibold">
          <div className="flex gap-3 items-center text-yellow-500">
            <img src={icon} alt="icon" />
            Memory
          </div>
          <div>
            {memory} <span className="text-gray-400">/ 100</span>
          </div>
        </p>
      ) : (
        ""
      )}
      {verbal ? (
        <p className="flex justify-between w-[280px] h-14 items-center bg-green-50 rounded-md px-5 font-semibold">
          <div className="flex gap-3 items-center text-green-500">
            <img src={icon} alt="icon" />
            Verbal
          </div>
          <div>
            {verbal} <span className="text-gray-400">/ 100</span>
          </div>
        </p>
      ) : (
        ""
      )}
      {visual ? (
        <p className="flex justify-between w-[280px] h-14 items-center bg-blue-50 rounded-md px-5 font-semibold">
          <div className="flex gap-3 items-center text-blue-800">
            <img src={icon} alt="icon" />
            Visual
          </div>
          <div>
            {visual} <span className="text-gray-400">/ 100</span>
          </div>
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default ResultCategory;
