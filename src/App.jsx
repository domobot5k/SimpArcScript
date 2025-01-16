import React, { useState } from "react";
import MainLayout from "./MainLayout";
import "./styles.css"; // Include global styling
import Intro from "./components/Intro";
import AddGlobalVariables from "./components/AddGlobalVariables";
import DefineGoal from "./components/DefineGoal";
import DefineVariables from "./components/DefineVariables";
import Summary from "./components/Summary";
import ArcScriptEditor from "./components/ArcScriptEditor";

// Main App Component
function App() {
  // State variables
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current step in the flowchart
  const [globalVariables, setGlobalVariables] = useState([]); // Stores the global variables added by the user
  const [userChoices, setUserChoices] = useState([]); // Stores the user's choices for logic or actions
  const [codePreview, setCodePreview] = useState("// Your ArcScript code will appear here"); // Displays the live code preview

  // Function to handle CKEditor changes
  const handleEditorChange = (content) => {
    setCodePreview(content); // Update the code preview with content from the editor
  };

  // Function to navigate to the next step
  const handleNextStep = () => setCurrentStep(currentStep + 1);

  // Function to navigate to the previous step
  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  // Function to add or update a global variable
  const handleAddOrUpdateVariable = (variable, index = null) => {
    if (index !== null) {
      // Update an existing variable
      const updatedVariables = [...globalVariables];
      updatedVariables[index] = variable;
      setGlobalVariables(updatedVariables);
      setCodePreview(`/* Edited Variable: ${variable.name} (${variable.type}) */`);
    } else {
      // Add a new variable
      setGlobalVariables([...globalVariables, variable]);
      setCodePreview(`/* Added Variable: ${variable.name} (${variable.type}) */`);
    }
  };

  // Function to delete a global variable
  const handleDeleteVariable = (index) => {
    const deletedVariable = globalVariables[index];
    setGlobalVariables(globalVariables.filter((_, i) => i !== index));
    setCodePreview(`/* Deleted Variable: ${deletedVariable.name} */`);
  };

  return (
    // MainLayout wraps the app's content with layout-specific components like dropdown and code preview
    <MainLayout
      globalVariables={globalVariables}
      codePreview={codePreview}
      onEdit={handleAddOrUpdateVariable}
      onDelete={handleDeleteVariable}
    >
      {/* Step 0: Intro */}
      {currentStep === 0 && <Intro onNext={handleNextStep} />}

      {/* Step 1: Add Global Variables */}
      {currentStep === 1 && (
        <AddGlobalVariables
          onAddVariable={handleAddOrUpdateVariable}
          onNext={handleNextStep}
          onBack={handlePreviousStep}
        />
      )}

      {/* Step 2: Define Goal */}
      {currentStep === 2 && (
        <DefineGoal
          onNext={(choice) => {
            setUserChoices([...userChoices, choice]); // Save user choice
            handleNextStep();
          }}
          onBack={handlePreviousStep}
        />
      )}

      {/* Step 3: Define Variables */}
      {currentStep === 3 && (
        <DefineVariables
          onNext={handleNextStep}
          onBack={handlePreviousStep}
        />
      )}

      {/* Step 4: Summary with ArcScriptEditor */}
      {currentStep === 4 && (
        <Summary
          globalVariables={globalVariables}
          userChoices={userChoices}
          onBack={handlePreviousStep}
        >
          {/* Include the ArcScriptEditor in the Summary */}
          <h3>Review and Edit Your ArcScript</h3>
          <ArcScriptEditor
            initialData={codePreview} // Pass the current ArcScript preview as the initial data
            onChange={handleEditorChange} // Update the code preview on editor changes
          />
        </Summary>
      )}
    </MainLayout>
  );
}

export default App;
