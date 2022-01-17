import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css";
import "./app.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Count from "./components/Count/Count";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        <Route path={`/`} element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path={`products/:productId`} element={<Count/>}/>/*yani har chizi bad az "products/" bod be onvane moteqayer ":product" bezar */
                            <Route path={'*'} element={<div>404 Sorry , NOT FOUND</div>}/>
                        </Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
