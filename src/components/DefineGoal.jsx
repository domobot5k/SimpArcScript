import PropTypes from "prop-types";

function DefineGoal({ onNext, onBack }) {
  return (
    <div>
      <h2>Step 2: Define the Goal</h2>
      <p>What action or logic do you want to create?</p>
      <button onClick={() => onNext("Choices")}>Choices</button>
      <button onClick={() => onNext("Variable Updates")}>
        Variable Updates
      </button>
      <button onClick={() => onNext("Conditional Logic")}>
        Conditional Logic
      </button>
      <button onClick={() => onNext("Dynamic Text")}>Dynamic Text</button>
      <div>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}

DefineGoal.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default DefineGoal;
