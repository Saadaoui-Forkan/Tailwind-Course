import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./components/Colors";
import ContainerAndSpacing from "./components/container-spacing/ConiainerAndSpacing";
import Typography from "./components/typography";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/colors' element={<Colors/>} />    
        <Route path='/container-spacing' element={<ContainerAndSpacing/>} />  
        <Route path='/typography' element={<Typography/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
