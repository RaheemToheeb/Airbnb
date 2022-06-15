import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Heder";
import Layer1 from "./Component/Layer1/Layer1";
import Layer2 from "./Component/Layer2/Layer2";
import Signup2 from "./Component/Header/Signup2";
import Signin from "./Component/Header/Signin";
import Detailpage from "./Component/Detailpage/Deatailpage";
import Detailpage2 from "./Component/Detailpage/Detailpage2";
import Homedetail from "./Component/Detailpage/Homedetail";
import Car from "./Component/Layer1/Car";
import Surf from "./Component/Layer1/Surf";
import Office from "./Component/Layer1/Office";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layer1 />

      <Routes>
        <Route path="/" element={<Layer2 />} />
        <Route path="/Logo" element={<Layer2 />} />
        <Route path="/Surf" element={<Surf />} />
        <Route path="/Office" element={<Office />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Detail" element={<Homedetail />} />
        <Route path="/Signup" element={<Signup2 />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
