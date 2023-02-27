import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import InputForm from "./components/Input"
import ChatBox from "./components/ChatBox"
import ChatProvider from "./ChatContext"


function App() {


  return (
    <ChatProvider>
      <div className="App h-full">
        <Navbar></Navbar>
        <Header></Header>
        <ChatBox></ChatBox>


        <InputForm></InputForm>
      </div>
    </ChatProvider>




  );
}

export default App;
