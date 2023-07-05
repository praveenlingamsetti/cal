import { useState } from "react";

import BasicCal from "./components/basicCalculator";
import EnergyConvertor from "./components/EnergyConvertor";
import LengthCal from "./components/lengthconversion";
import MassConvertor from "./components/massconvertor";
import TempConvertor from "./components/TempConvertor";

const calType = [
  "basicCalculator",
  "TemperatureConvertor",
  "massConvertor",
  "lengthConvertor",
  "energyConvertor",
];

const App = () => {
  const [activeCal, setActiveCal] = useState("basicCalculator");

  const handleActiveCal = (event) => {
    setActiveCal(event.target.value);
  };

  const renderCalculator = () => {
    switch (activeCal) {
      case "basicCalculator":
        return <BasicCal />;
        break;
      case "TemperatureConvertor":
        return <TempConvertor />;
        break;
      case "massConvertor":
        return <MassConvertor />;
        break;
      case "lengthConvertor":
        return <LengthCal />;
        break;
      case "energyConvertor":
        return <EnergyConvertor />;
        break;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h2>Calculator</h2>
      <div className="">
        <select onChange={handleActiveCal} className="">
          {calType.map((each) => (
            <option value={each}>{each}</option>
          ))}
        </select>
        <div className="select-app">{renderCalculator()}</div>
      </div>
    </div>
  );
};

export default App;
