
import './App.css';
import Register from './component/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './component/SignIn';
import Dashboard from './component/Dashboard';
import MensBasic from './component/MensBasic'
import MensBottom from './component/MensBottom'
import WomensOST from './component/WomensOST'
import WomensBasic from './component/WomensBasic'
import OSTproducts from './component/OSTproducts';
import WbProducts from './component/WbProducts';
import MbProducts from './component/MbProducts';
import MbottomProducts from './component/MbottomProducts';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mensbasic" element={<MensBasic />} />
          <Route path="/womensbasic" element={<WomensBasic />} />
          <Route path="/mensbottom" element={<MensBottom />} />
          <Route path="/womensOST" element={<WomensOST />} />
          <Route path="/womensOST/products" element={<OSTproducts />} />
          <Route path="/womensbasic/products" element={<WbProducts />} />
          <Route path="/mensbasic/products" element={<MbProducts />} />
          <Route path="/mensbottom/products" element={<MbottomProducts />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
