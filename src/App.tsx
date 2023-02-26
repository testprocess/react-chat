import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import InputForm from "./components/Input"

function App() {
  return (
    <div className="App h-full">
      <Navbar></Navbar>
      <Header></Header>


      <InputForm></InputForm>
    </div>
  );
}

export default App;
