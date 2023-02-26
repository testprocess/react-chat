import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import InputForm from "./components/Input"
import ChatBox from "./components/ChatBox"

import ChatBody from "./components/ChatBody"

function App() {
  return (
    <div className="App h-full">
      <Navbar></Navbar>
      <Header></Header>
      <ChatBox>
        <ChatBody name="Test" message='test'></ChatBody>

      </ChatBox>


      <InputForm></InputForm>
    </div>
  );
}

export default App;
