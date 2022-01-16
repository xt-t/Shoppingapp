import {Link, useNavigate} from "react-router-dom";
import "./NavigationBar.scss"


export default function NavigationBar() {
    let navigate = useNavigate(); //History der letzten Seiten navigieren z. B. 1 Seite vorwärts/rückwärts gehen

    return (
        <div className="navigationbar">
            <div className="navkomp">
                <Link to="/ " className="link">Main</Link>
                <Link to="/sec" className="link">SecPage</Link>
            </div>
            <div className="navkomp">
            <button className="back" onClick={() => navigate(-1)}>Back</button>
                {/*<div><button id="darker" onClick={() => navigate(-1)}>Darker</button></div>*/}
                {/*<button id="lighter" onClick={() => navigate(-1)}>Lighter</button>*/}
                {/*<button id="darkmode" onClick={() => navigate(-1)}>Darkmode</button>*/}
                {/*<button id="lightmode" onClick={() => navigate(-1)}>Lightmode</button>*/}
        </div>
        </div>
    )
}