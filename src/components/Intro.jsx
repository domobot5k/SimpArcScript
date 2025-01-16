import PropTypes from "prop-types";

function Intro({ onNext }) {
  return (
    <div>
      <h2>Welcome to SimpArcScript</h2>
      <p>Build your ArcScript step by step with this guided flowchart.</p>
      <button onClick={onNext}>Get Started</button>
    </div>
  );
}

Intro.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Intro;
