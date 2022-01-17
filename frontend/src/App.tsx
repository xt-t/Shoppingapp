import './App.scss';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import SecPage from "./pages/SecPage";

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
