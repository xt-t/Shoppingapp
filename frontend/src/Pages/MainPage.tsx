import "./MainPage.scss"
import NavigationBar from "../Components/NavigationBar";
import Shoppinglist from "../Components/Shoppinglist";

export default function MainPage() {
    return (
        <div className="mainpage">
            <h2 className="head">Produkteinkauf</h2>
            <NavigationBar/>
            <Shoppinglist/>
        </div>
    )
}