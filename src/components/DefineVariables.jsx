import PropTypes from "prop-types";

function DefineVariables({ onNext, onBack }) {
  return (
    <div>
      <h2>Step 3: Define Variables</h2>
      <p>Define additional variables required for this step.</p>
      <div>
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

DefineVariables.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default DefineVariables;
