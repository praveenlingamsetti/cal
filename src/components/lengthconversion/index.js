import { useState, useEffect } from "react";

import "./index.css";

const lengths = [
  "centimeters",
  "meters",
  "kilometers",
  "inches",
  "feet",
  "yards",
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const LengthCal = () => {
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
      case "centimeters":
        switch (activeoption2) {
          case "meters":
            console.log("triggered");
            setInput2(input1 / 100);
            break;
          case "kilometers":
            setInput2(input1 / 10000);
            break;
          case "inches":
            setInput2(input1 / 2.54);
            break;
          case "feet":
            setInput2(input1 / 30.48);
            break;
          case "yards":
            setInput2(input1 / 91.44);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;
      case "meters":
        switch (activeoption2) {
          case "centimeters":
            console.log("triggered");
            setInput2(input1 * 100);
            break;
          case "kilometers":
            setInput2(input1 / 1000);
            break;
          case "inches":
            setInput2(input1 * 39.37);
            break;
          case "feet":
            setInput2(input1 * 3.28);
            break;
          case "yards":
            setInput2(input1 * 1.093);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;

      case "kilometers":
        switch (activeoption2) {
          case "centimeters":
            console.log("triggered");
            setInput2(input1 * 100000);
            break;
          case "meters":
            setInput2(input1 * 1000);
            break;
          case "inches":
            setInput2(input1 * 39370);
            break;
          case "feet":
            setInput2(input1 * 3280);
            break;
          case "yards":
            setInput2(input1 * 1093);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;
      case "inches":
        switch (activeoption2) {
          case "centimeters":
            console.log("triggered");
            setInput2(input1 * 2.54);
            break;
          case "kilometers":
            setInput2(input1 / 39370);
            break;
          case "meters":
            setInput2(input1 / 39.37);
            break;
          case "feet":
            setInput2(input1 / 12);
            break;
          case "yards":
            setInput2(input1 / 36);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;
      case "feet":
        switch (activeoption2) {
          case "centimeters":
            console.log("triggered");
            setInput2(input1 * 30.48);
            break;
          case "kilometers":
            setInput2(input1 / 3280);
            break;
          case "inches":
            setInput2(input1 * 12);
            break;
          case "meters":
            setInput2(input1 / 3.28);
            break;
          case "yards":
            setInput2(input1 / 3);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;
      case "yards":
        switch (activeoption2) {
          case "centimeters":
            console.log("triggered");
            setInput2(input1 * 91.4);
            break;
          case "kilometers":
            setInput2(input1 / 1093);
            break;
          case "inches":
            setInput2(input1 * 36);
            break;
          case "feet":
            setInput2(input1 * 3);
            break;
          case "meters":
            setInput2(input1 / 0.915);
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
    <div className="length-container">
      <h2 className="length-heading">Length Convertor</h2>
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

export default LengthCal;
