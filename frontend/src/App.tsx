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

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllShoppingitems()
            .then(items => setProducts(items))
            .catch(error => console.error(error))
    }, [])

    const addItem = (product:Shoppingitem) => {
        addShoppingitem(product.id)
            .then(() => getAllShoppingitems())
            .then(products => setProducts(products))
            .catch(error => console.error(error))
    }

    const deleteShoppinglist = () => {
        deleteWholeList()
    }

    const getItemById = (id:String) => {
        getShoppingitemById(id)}

    const deleteItem  = (id:String) =>
        deleteShoppingitem(id)
            .then(() => getAllShoppingitems())
            .then(items => setProducts(items))
            .catch(error => console.error(error))

    const updateItem  = (product:Shoppingitem) =>
        updateShoppingitem(product)
            .then(() => getAllShoppingitems())
            .then(products => setProducts(products))
            .catch(error => console.error(error))

        return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sec" element={<SecPage/>}/>
            </Routes>
        </div>
    );

}
