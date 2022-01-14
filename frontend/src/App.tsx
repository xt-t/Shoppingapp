import './App.scss';
import MainPage from "./Pages/MainPage";
import {Route, Routes} from "react-router-dom";
import SecPage from "./Pages/SecPage";

function App() {

        return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sec" element={<SecPage/>}/>
            </Routes>
        </div>
    );

}

export default App;
