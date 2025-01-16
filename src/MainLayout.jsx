import PropTypes from "prop-types";
import "./styles.css"; // Ensure styles are included

function MainLayout({ children, globalVariables, codePreview, onEdit, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Left Section: Dynamic Content (Flowchart Steps) */}
      <div
        style={{
          flex: "1", // Flexible width, taking up 70% of the space
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          overflowY: "auto",
        }}
      >
        {children}
      </div>

      {/* Right Section: Global Variables and Code Preview */}
      <div
        style={{
          flex: "1", // Flexible width, taking up 30% of the space
          backgroundColor: "#f4f4f4",
          borderLeft: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {/* Global Variables Dropdown */}
        <div
          style={{
            marginBottom: "20px",
            textAlign: "left",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <label htmlFor="globalVariables" style={{ marginRight: "10px" }}>
            Project Global Variables:
          </label>
          <select
            id="globalVariables"
            style={{
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            {globalVariables.length === 0 ? (
              <option>No variables added</option>
            ) : (
              globalVariables.map((variable, index) => (
                <option key={index}>
                  {variable.name} ({variable.type}) = {variable.initialValue}
                </option>
              ))
            )}
          </select>

          {/* Edit and Delete Buttons */}
          {globalVariables.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              {globalVariables.map((variable, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <span>
                    {variable.name} ({variable.type}) = {variable.initialValue}
                  </span>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => onEdit(variable, index)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "5px",
                      padding: "5px 10px",
                      backgroundColor: "#ff4d4d",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Code Preview Section */}
        <div style={{ flex: "1 1 auto", textAlign: "left", overflowY: "auto" }}>
          <h2>Code Preview</h2>
          <pre
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              height: "calc(100% - 40px)",
              overflow: "auto",
            }}
          >
            {codePreview}
          </pre>
        </div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  globalVariables: PropTypes.array.isRequired,
  codePreview: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MainLayout;
