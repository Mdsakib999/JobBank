import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-5xl text-purple-500 border rounded-lg">
        Hello world!
      </h1>
      <p className="text-">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        cum eius similique recusandae fugiat accusantium hic voluptatum. Ducimus
        aliquid cumque vero iste non asperiores debitis nulla, voluptatum
        cupiditate eligendi iusto.
      </p>
    </div>
  );
}

export default App;
