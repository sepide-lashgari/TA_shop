import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css";
import "./app.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Count from "./components/Count/Count";
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
                {/* "/" be mani safe aslist va dar hame safe ha tekrar mishavad  */}
            <Route path={"/"} element={<Layout />}>
                {/* index halate default an address mibashad ke inja / khali ast  */}
              <Route index element={<Home/>}/>
              {/* baraye address products/moteghayer component count ra khoroji midahad ke mitavanad moteghayer 1,2,3,... bashad */}
              <Route path={'products/:productId'} element={<count/>}/>
              {/* * hameye addres ha ra shamel mishavad va chonn entehaye rout hast be manaye 404 ast */}
              <Route path={'*'} element={<div> 404 sorry, Not Found</div>}/>
   
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
