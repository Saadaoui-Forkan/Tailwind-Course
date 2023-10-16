import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./components/Colors";
import ContainerAndSpacing from "./components/container-spacing/ConiainerAndSpacing";
import Typography from "./components/typography";
import Sinzing from './components/sizing'
import Position from './components/layout-position'
import BgShadows from './components/background & shadows'
import BorderBorderRadius from './components/borders & border-radius'
import Filters from './components/filters'
import Interactivity from './components/interactivity'
import Breackpoints from './components/breackpoints'
import Columns from './components/columns'
import Flexbox from './components/flex'
import Grid from './components/grid'
import TransitionTransform from './components/transition & transform'
import Animation from './components/animation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/colors' element={<Colors/>} />    
        <Route path='/container-spacing' element={<ContainerAndSpacing/>} />  
        <Route path='/typography' element={<Typography/>} />
        <Route path='/sizing' element={<Sinzing/>}/>
        <Route path='/position' element={<Position/>}/>
        <Route path='/bg-shadows' element={<BgShadows/>}/>
        <Route path='/borders' element={<BorderBorderRadius/>}/>
        <Route path='/filters' element={<Filters/>}/>
        <Route path='/interactivity' element={<Interactivity/>}/>
        <Route path='/breackpoints' element={<Breackpoints/>}/>
        <Route path='/columns' element={<Columns/>}/>
        <Route path='/flexbox' element={<Flexbox/>}/>
        <Route path='/grid' element={<Grid/>}/>
        <Route path='/transition-transform' element={<TransitionTransform/>}/>
        <Route path='/animation' element={<Animation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
