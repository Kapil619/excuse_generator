import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {

  const [category, setCategory] = useState("")

const fetchData = (excuse) =>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) =>{
    setCategory(res.data[0].excuse);
  }
  );
}

  return <div className="App">
    <h1>Generate an excuse</h1>
    <button onClick={ () =>{ fetchData("party")}}>Party </button>
    <button onClick={ () =>{ fetchData("gaming")}}>Gaming</button>
    <button onClick={ () =>{ fetchData("family")}}>Family</button>
   <p> {category}</p>  
  </div>;
}

export default App;
