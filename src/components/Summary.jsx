import PropTypes from "prop-types";

function Summary({ globalVariables, userChoices, onBack }) {
  return (
    <div>
      <h2>Summary</h2>
      <h3>Global Variables:</h3>
      <ul>
        {globalVariables.map((variable, index) => (
          <li key={index}>
            {variable.name} ({variable.type}) = {variable.initialValue}
          </li>
        ))}
      </ul>
      <h3>Choices:</h3>
      <ul>
        {userChoices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

Summary.propTypes = {
  globalVariables: PropTypes.array.isRequired,
  userChoices: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Summary;
