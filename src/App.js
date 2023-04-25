import Navbar from "./Components/Navbar";
import Login from './Components/Login';
import SingUp from './Components/SingUp';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About"
import Services from "./Components/Services";
import NoteState from "./context/notes/NoteState";
import  { Toaster } from 'react-hot-toast';
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";



function App() {

  return (<BrowserRouter>
<NoteState>
  <Navbar/>
  
  <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={25}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{

   
    duration: 3000,
    style: {
      background: '#1F2937',
      color: 'white',
    }
  }}
/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </NoteState>
    <Footer/>
    
 </BrowserRouter>)
}

export default App;
