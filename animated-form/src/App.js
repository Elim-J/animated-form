import "./styles/App.css"
import React from "react"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
  
  const [darkMode, setDarkMode] = React.useState(true)

  function chooseMode(){
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Header 
        darkMode={darkMode}
        handleMode={chooseMode}
      />
      <Form />
    </div>
  );
}

export default App;
