import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Earbuds from "./Pages/Earbuds";
import Earphone from "./Pages/Earphone";
import Speaker from "./Pages/Speaker";
import Headphone from "./Pages/Headphone";
import Neckband from "./Pages/Neckband";


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="earbuds" element={<Earbuds/>}></Route>
        <Route path="earphone" element={<Earphone/>}></Route>
        <Route path="speaker" element={<Speaker/>}></Route>
        <Route path="headphone" element={<Headphone/>}></Route>
        <Route path="neckband" element={<Neckband/>}></Route>
       
       </Route>
     </Routes>
   
     <Routes>
  
      
    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;