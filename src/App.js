import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./components/Colors";
import ContainerAndSpacing from "./components/container-spacing/ConiainerAndSpacing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/colors' element={<Colors/>} />    
        <Route path='/container-spacing' element={<ContainerAndSpacing/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
