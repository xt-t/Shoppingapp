import './App.scss';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import SecPage from "./pages/SecPage";
import LoginPage from "./pages/LoginPage"
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./context/AuthProvider";



export default function App() {


        return (
        <div className="App">
            <AuthProvider>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path="/" element={<RequireAuth><MainPage/></RequireAuth>}/>
                <Route path="/sec" element={<RequireAuth><SecPage/></RequireAuth>} />
            </Routes>
            </AuthProvider>
        </div>
    )
}
