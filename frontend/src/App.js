import React from "react"; // Importing the React library to create the component
import Calculator from "./components/Calculator"; // Importing the Calculator component

// Main App component that serves as the entry point of the application
const App = () => {
  return (
    <div className="App">
      {" "}
      <Calculator />
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application
