import React from 'react'

const Buttonscontainer = ({onButtonClick}) => {

    const buttonNames = [
      "C",
      "1",
      "2",
      "+",
      "3",
      "4",
      "-",
      "5",
      "6",
      "*",
      "7",
      "8",
      "/",
      "=",
      "9",
      "0",
      ".",
    ];

  
  return (
    <div className="buttonContainer">
      {buttonNames.map((buttonName)=>(
        <button className="button" onClick={()=> onButtonClick(buttonName)}>
        {buttonName}
        </button>

      ))}

    </div>
  )
}

export default Buttonscontainer