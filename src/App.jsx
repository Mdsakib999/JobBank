import { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
