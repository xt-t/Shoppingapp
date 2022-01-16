import "./MainPage.scss"
import NavigationBar from "../components/NavigationBar";
import Shoppinglist from "../components/Shoppinglist";

export default function MainPage() {
    return (
        <div className="mainpage">
            <h2 className="head">Produkteinkauf</h2>
            <NavigationBar/>
            <Shoppinglist/>
        </div>
    )
}