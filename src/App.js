import React  from "react";

function App() {
  let myName = "Gisela";

function alertMyName() {
    alert(myName)
}

  return <div className="App">
    <button onClick={alertMyName}>Button</button>
    <input type="text"/>
    <h1>{myName}</h1>
  </div>
};

export default App;