import React, { useState } from "react";
import PropTypes from "prop-types";

function AddGlobalVariables({ onAddVariable, onNext, onBack }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Integer");
  const [initialValue, setInitialValue] = useState("");

  return (
    <div>
      <h2>Step 1: Add Global Variables</h2>
      <p>Define the global variables for your project.</p>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Integer</option>
          <option>Boolean</option>
          <option>String</option>
          <option>Float</option>
        </select>
      </label>
      <label>
        Initial Value:
        <input
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onAddVariable({ name, type, initialValue });
          setName("");
          setType("Integer");
          setInitialValue("");
        }}
      >
        Add Variable
      </button>
      <div>
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

AddGlobalVariables.propTypes = {
  onAddVariable: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AddGlobalVariables;
