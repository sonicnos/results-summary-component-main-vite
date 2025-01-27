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
    <div className="h-screen flex items-center justify-center bg-[#ecf2ff]">
      <Card
        className="flex h-[32.5rem] w-[46rem] shadow-2xl rounded-4xl bg-white"
        reaction={data.reaction}
        memory={data.memory}
        verbal={data.verbal}
        visual={data.visual}
      />
    </div>
  );
}

export default App;
