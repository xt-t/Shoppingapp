import './App.scss';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import SecPage from "./pages/SecPage";
import {
    addShoppingitem, deleteShoppingitem, deleteWholeList,
    getAllShoppingitems, getShoppingitemById, updateShoppingitem
} from "./service/shoppinglist-api-service";
import {Shoppingitem} from "./components/Shoppingitem";
import {useEffect, useState} from "react";

export default function App() {

        return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sec" element={<SecPage/>}/>
            </Routes>
        </div>
    );

}
