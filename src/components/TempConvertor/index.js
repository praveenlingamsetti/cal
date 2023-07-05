import { useState, useEffect } from "react";

import "./index.css";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const lengths = ["Celsius", "Fahrenheit", "Kelvin"];

const TempConvertor = () => {
  const [activeoption1, setOption1] = useState(lengths[0]);
  const [activeoption2, setOption2] = useState(lengths[0]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  //const [tempInputt, setTempInput] = useState("");

  const onChangelength = (event) => {
    setOption1(event.target.value);
  };

  const onChangelength2 = (event) => {
    setOption2(event.target.value);
  };

  useEffect(() => {
    OnPossiblities();
  }, [input2, input1, activeoption2, activeoption1]);

  const OnPossiblities = (tempInput) => {
    // if (activeoption1 === activeoption2) {
    //   setInput2(tempInput);
    // } else if (activeoption1 === "centimeters" && activeoption2 === "meters") {
    //   setInput2(input1 / 100);
    // }
    switch (activeoption1) {
      case "Celsius":
        switch (activeoption2) {
          case "Fahrenheit":
            setInput2(input1 * 1.8 + 32);
            break;
          case "Kelvin":
            setInput2(Number(input1) + 273);
            break;

          default:
            setInput2(input1);
            break;
        }
        break;
      case "Fahrenheit":
        switch (activeoption2) {
          case "Celsius":
            console.log("triggered");
            setInput2(((input1 - 32) * 5) / 9);
            break;
          case "Kelvin":
            setInput2(((input1 - 32) * 5) / 9 + 273);
            break;

          default:
            setInput2(input1);
            break;
        }
        break;

      case "Kelvin":
        switch (activeoption2) {
          case "Fahrenheit":
            console.log("triggered");
            setInput2((input1 - 273) * (9 / 5) + 32);
            break;
          case "Celsius":
            setInput2(Number(input1) + 273);
            break;

          default:
            setInput2(input1);
            break;
        }
        break;
    }
  };

  const onChangeInput1 = (event) => {
    const tempInput = event.target.value;
    //setTempInput(tempInput);
    setInput1(tempInput);
    OnPossiblities();
  };

  const handleInput = (each) => {
    //const tempInput = event.target.value;
    //setTempInput(tempInput);

    setInput1(input1 + each);
    OnPossiblities();
  };

  //   const onHandleZero = (each) => {
  //     setInput1(input1 + each);
  //     OnPossiblities();
  //   };

  const onClear = () => {
    setInput1("");
    setInput2("");
  };

  return (
    <div className="Temperature-container">
      <h2 className="length-heading">Temperature Convertor</h2>
      <input
        value={input1}
        onChange={onChangeInput1}
        type="number"
        className="m-3"
      />
      <select value={activeoption1} onChange={onChangelength}>
        {lengths.map((each) => (
          <option value={each}>{each}</option>
        ))}
      </select>

      <br />
      <input
        value={input2}
        //onChange={onChangeInput2}
        type="number"
        className="m-3"
      />
      <select value={activeoption2} onChange={onChangelength2}>
        {lengths.map((each) => (
          <option value={each}>{each}</option>
        ))}
      </select>
      <div className="btn-container">
        {numbers.map((each) => (
          <button
            onClick={() => handleInput(each)}
            className="btn btn-primary each-btn"
          >
            {each}
          </button>
        ))}
        <button onClick={onClear} className="btn btn-primary each-btn">
          X
        </button>
        <button
          onClick={() => handleInput(0)}
          className="btn btn-primary each-btn"
        >
          0
        </button>
      </div>
    </div>
  );
};

export default TempConvertor;
