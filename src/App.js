import Display from "./components/Display";
import { useState } from "react";
import Buttonscontainer from "./components/Buttonscontainer";




import "./styles/App.css";
import "./styles/display.css";
import "./styles/buttoncontainer.css"



function App() {

let [calval,setCalval] = useState("");

const onButtonClick = (buttonText) => {
  if(buttonText === "C"){
    setCalval("");

  }else if (buttonText === "="){
    const result = eval(calval);
    setCalval(result);

  }else {
    const newDisplayValue = calval + buttonText;
    setCalval(newDisplayValue);
  }
}

  return (
     <div>
      <h1>Calculator</h1>
    <div className="calculator">
      <Display DisplayValue={calval} />
      <Buttonscontainer onButtonClick={onButtonClick} />
    </div>
    </div>
  )
    
  
}

export default App;
