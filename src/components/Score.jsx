const Score = ({ average, className }) => {
  return (
    <div className={className}>
      <h1 className="text-5xl text-white font-semibold">{average}</h1>
      <h3 className="text-gray-400 text-md font-medium">of 100</h3>
    </div>
  );
};

export default Score;
