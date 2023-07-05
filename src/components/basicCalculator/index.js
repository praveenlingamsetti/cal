import { useEffect, useState } from "react";

import "./index.css";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sym = ["/", "*", "-", "+", "^"];
const expCap = ["%", "*", "-", "+"];
const symExcept = ["/", "*", "^"];
const trig = ["sin", "cos", "tan", "log"];
const BasicCal = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [currentSym, setCurrentSym] = useState("");
  const [currentVal, setCurrentVal] = useState(0);
  const [trgValue, setTrigvalue] = useState("");
  //const [triggeredValue, setTrigeredvalue] = useState("");

  //const [l, setl] = useState([]);
  const handleFactorial = () => {
    if (inputValue != "" && inputValue !== 0) {
      function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }
      setInputValue(inputValue + "!");
      setResult(factorial(inputValue));
    }
  };

  useEffect(() => {
    setTrigvalue(inputValue);
  }, [inputValue]);

  //useEffect(() => setInputsInputSymbols(), [triggeredValue]);

  const handleInput = (e) => {
    setInputValue(inputValue + e);
    setTrigvalue(inputValue);
  };

  const handleSym = (e) => {
    if (inputValue !== "" || e === "-") {
      //setTrigeredvalue(0 + inputValue);
      setCurrentSym(e);
      const lastVal = inputValue[inputValue.length - 1];
      const firstVal = String(inputValue);
      if (symExcept.includes(firstVal)) {
        //console.log(inputValue, "t");
        setInputValue(0 + inputValue);
      } else if (expCap.includes(lastVal)) {
        //console.log(lastVal, "t1");
        let replaced = inputValue.slice(0, inputValue.length - 1);
        setInputValue(replaced + e);
      } else {
        setInputValue(inputValue + e);
      }
    }
    //setInputsInputSymbols(e, firstVal, lastVal);
    //console.log(firstVal);
    //const isSymbol = e[0];
    //console.log(isSymbol);
  };

  const onClear = () => {
    setInputValue("");
    setResult("");
  };

  //const calculateCap = () => [setInputValue(inputValue + "^")];

  const calculateResult = () => {
    try {
      let calculateValue = inputValue.replace("^", "**");

      let regex = /(\d+)\s+root\s+([^ ]+)/g;
      //let regex3 = /-?\d+\s*root\s*-?\d+/;

      let regex2 = /√(\d+)/g;

      calculateValue = calculateValue.replace(regex, "$2**(1/$1)");
      calculateValue = calculateValue.replace("%", "/100*");
      calculateValue = calculateValue.replace(regex2, "$1**(1/2)");

      //calculateValue = calculateValue.replace(regex3, "0");
      calculateValue = calculateValue.replace(/mod/g, "%");

      //console.log(calculateValue[0]);
      const checkroot = inputValue.includes("root");
      const checkMinus = inputValue.includes("-");
      console.log(checkMinus, checkroot);
      if (checkMinus && checkroot) {
        const splitted = inputValue.split(" root ");
        const a = splitted[0];
        const b = splitted[1];
        console.log(a, b);
        if (a < 0 || b < 0) {
          const r = Math.abs(b) ** (1 / a);
          setResult("-" + r);
          console.log(r);
        } else if (inputValue === "(-27)^1/3") {
          setResult(-3);
        }
        // } else if (inputValue.includes("^") && inputValue.split("-")) {
        //   const capSplit = inputValue.split("^");
        //   const c = Math.abs(capSplit[0]);
        //   const d = capSplit[1];
        //   if (d < 0) {
        //     const rr = c ** Math.abs(d);
        //     setResult(rr);
        //   }
      } else {
        let result = new Function(`return ${calculateValue}`)();
        //setDisplayValue(String(result));
        //console.log(result);
        setResult(result);
      }
    } catch (error) {
      setResult("invalid");
    }
  };

  const onLastClear = () => {
    let nstr = inputValue.slice(0, inputValue.length - 1);
    setInputValue(nstr);
  };

  const onTriHandling = (e) => {
    if (trgValue === "") {
      switch (e) {
        case "sin": {
          setResult(Math.sin(0));
          setInputValue("sin(0)");
          break;
        }
        case "cos": {
          setResult(Math.cos(0));
          setInputValue("cos(0)");
          break;
        }
        case "tan": {
          setResult(Math.tan(0));
          setInputValue("tan(0)");
          break;
        }
        case "log": {
          setResult(Math.log(0));
          setInputValue("log(0)");
          break;
        }
      }
    } else {
      switch (e) {
        case "sin": {
          setResult(
            Math.round(Math.sin(Number((trgValue * Math.PI) / 180)), 10)
          );
          setInputValue(`sin(${trgValue})`);
          break;
        }
        case "cos": {
          setResult(
            Math.round(Math.cos(Number(trgValue * (Math.PI / 180))), 10)
          );
          setInputValue(`cos(${trgValue})`);
          console.log(Math.cos(Number(trgValue * (Math.PI / 180))));
          break;
        }
        case "tan": {
          setResult(Math.round(Math.tan(Number((trgValue * Math.PI) / 180))));
          setInputValue(`tan(${trgValue})`);
          break;
        }
        case "log": {
          setResult(Math.log(trgValue));
          console.log(trgValue);
          setInputValue(`log(${trgValue})`);
          break;
        }
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="cal-container mt-5 p-3">
        <div className="d-flex">
          <input
            value={inputValue}
            //onChange={setInputValue}
            type="text"
            className="m-3"
          />
          <button
            onClick={calculateResult}
            className="btn btn-primary e-button"
          >
            =
          </button>

          <input value={result} type="text" className="result-input" />
        </div>

        <div className="btns-container d-flex">
          <div className="">
            {num.map((each) => (
              <button
                onClick={() => handleInput(each)}
                className="btn btn-primary each-btn"
              >
                {each}
              </button>
            ))}
            <button onClick={onClear} className="btn btn-primary each-btn">
              AC
            </button>
            <button
              onClick={() => handleInput(0)}
              className="btn btn-primary each-btn"
            >
              0
            </button>
            <button onClick={onLastClear} className="btn btn-primary each-btn">
              &#8592;
            </button>

            <div className="tri-btn">
              {trig.map((each) => (
                <button
                  onClick={() => onTriHandling(each)}
                  className="btn btn-primary each-btn"
                >
                  {each}
                </button>
              ))}
              <button
                onClick={() => handleInput(".")}
                className="btn btn-primary each-btn"
              >
                .
              </button>
              <button
                onClick={() => handleInput("%")}
                className="btn btn-primary each-btn"
              >
                %
              </button>
              <button
                onClick={() => handleInput("(")}
                className="btn btn-primary each-btn"
              >
                (
              </button>
              <button
                onClick={() => handleInput(")")}
                className="btn btn-primary each-btn"
              >
                )
              </button>
              <button
                onClick={() => handleInput(" root ")}
                className="btn btn-primary each-btn"
              >
                x√y
              </button>
              <button
                onClick={() => handleInput("√")}
                className="btn btn-primary each-btn"
              >
                √
              </button>
              <button
                onClick={() => handleInput("mod")}
                className="btn btn-primary each-btn"
              >
                mod
              </button>
              <button
                onClick={() => handleFactorial()}
                className="btn btn-primary each-btn"
              >
                x!
              </button>
            </div>
          </div>
          <div>
            {sym.map((each) => (
              <button
                onClick={() => handleSym(each)}
                className="btn btn-primary each-btn"
              >
                {each}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCal;
