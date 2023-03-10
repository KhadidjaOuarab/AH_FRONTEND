import React from "react";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

function InputPrime() {
  const [countries, setCountries] = useState([]);
  const [value1, setValue1] = useState("");
  return (
    <div>
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <InputText
            id="inputtext"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <label htmlFor="inputtext">InputText</label>
        </span>
      </div>
    </div>
  );
}

export default InputPrime;
