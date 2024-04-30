import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/Aboutus";
import Contact  from "./Pages/Contactus";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Routes , Route, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooTer from "./components/FooTer"
import View from "./components/View";
import { createContext, useEffect, useState } from "react";
import { DummyProducts } from "./components/CardProducts";
import Addtocart from "./Pages/Addtocart";
import Paymentsec from "./Pages/Paymentsec"
import Admin from "./Pages/Admin";

export const AuthContext = createContext()
function App() {
  const [products,setProducts]  =useState(DummyProducts)
  const [login,SetLogin] = useState([])
  const [user,setUser] = useState(null)
  const [search,setSearch] = useState(null)
  const location = useLocation() 

  useEffect(() => {
    window.scroll(0,0)
  }, [location])
  

  return (
    <div className="app">
  <AuthContext.Provider value={{products,setProducts,login,SetLogin,user,setUser,search,setSearch}}>
  <Navbar />
  <div style={{minHeight:'100vh'}}>

    
     

      <Routes>

        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/shop/:type"} element={<Shop />} />
        <Route path={"/shop/:type/:id"} element={<View />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Signup"} element={<Signup />} />
        <Route path={"/addcart"} element={<Addtocart />} />
        <Route path={"/payment/:id"} element={<Paymentsec />} />
        <Route path={"/admin"} element={<Admin />} />

      </Routes>
</div>
      <FooTer />
</AuthContext.Provider>
    </div>
  );
}

export default App;
