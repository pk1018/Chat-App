import {Routes,Route,Navigate} from "react-router-dom"
import Chats from "./pages/Chats"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/chatContext";

function App() {
 
  const {user} = useContext(AuthContext);
  return (
    <>
    <ChatContextProvider user={user} >
      <NavBar/>
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={user? <Chats />: <Login/>} />
          <Route path="/register" element={user? <Chats/> : <Register/>} />
          <Route path="/login" element={user? <Chats/> : <Login/>} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Container>
      
      </ChatContextProvider>
    </>
  )
}

export default App
