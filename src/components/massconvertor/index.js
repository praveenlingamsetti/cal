import { useState, useEffect } from "react";

import "./index.css";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const lengths = ["Grams", "Kilograms", "Tonnes", "Pounds"];

const MassConvertor = () => {
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
      case "Grams":
        switch (activeoption2) {
          case "Kilograms":
            setInput2(Number(input1 / 1000));
            break;
          case "Tonnes":
            setInput2(Number(input1) / 1000000);
            break;
          case "Pounds":
            setInput2(Number(input1) / 453.6);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;
      case "Kilograms":
        switch (activeoption2) {
          case "Grams":
            //console.log("triggered");
            setInput2(input1 * 1000);
            break;
          case "Tonnes":
            setInput2(input1 / 1000);
            break;
          case "Pounds":
            setInput2(input1 * 2.2);
            break;
          default:
            setInput2(input1);
            break;
        }
        break;

      case "Pounds":
        switch (activeoption2) {
          case "Grams":
            //console.log("triggered");
            setInput2(input1 * 453.6);
            break;
          case "Kilograms":
            setInput2(Number(input1) * 0.454);
            break;
          case "Tonnes":
            setInput2(Number(input1) * 0.0005);
            break;
          default:
            setInput2(input1);
            break;
        }
      case "Tonnes":
        switch (activeoption2) {
          case "Grams":
            //console.log("triggered");
            setInput2(input1 * 100000);
            break;
          case "Kilograms":
            setInput2(Number(input1) * 1000);
            break;
          case "Pounds":
            setInput2(Number(input1) * 2000);
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
    <div className="mass-container">
      <h2 className="mass-heading">Mass Convertor</h2>
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

export default MassConvertor;
