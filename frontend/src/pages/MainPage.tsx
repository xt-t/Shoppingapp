import "./MainPage.scss"
import NavigationBar from "../components/NavigationBar";
import Shoppinglist from "../components/Shoppinglist";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function MainPage() {

    const {token, jwtDecoded} = useContext(AuthContext)

    return (
        <div className="mainpage">
            <h2 className="head">Produkteinkauf {jwtDecoded?.sub}</h2>
            <NavigationBar/>
            <Shoppinglist/>
        </div>
    )
}