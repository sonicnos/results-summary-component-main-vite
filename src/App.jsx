import { useState } from "react";

import Card from "./components/card";

function App() {
  const [data, setData] = useState({
    reaction: 80,
    memory: 92,
    verbal: 61,
    visual: 73,
  });

  return (
    <div className="h-screen flex sm:items-center sm:justify-center  bg-[#ecf2ff]">
      <Card
        className="flex sm:h-[32.5rem] sm:w-[46rem] sm:shadow-2xl sm:rounded-4xl bg-white flex-col sm:flex-row w-full "
        reaction={data.reaction}
        memory={data.memory}
        verbal={data.verbal}
        visual={data.visual}
      />
    </div>
  );
}

export default App;
