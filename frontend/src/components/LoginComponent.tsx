import {Button, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {loginPost} from "../service/shoppinglist-api-service";
import {LoginData} from "../model/LoginData";
import {AuthContext} from "../context/AuthProvider";



export default function LoginComponent() {


    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();

    const {token, jwtDecoded, setJwt} = useContext(AuthContext);

    const login = () => {
        const login: LoginData = {name: userName, password: userPassword}
        loginPost(login)
            .then(response => response.data)
            // .then(response => localStorage.setItem(TOKEN_STORAGE_KEY, response.data))
            .then((data)=> {
                setJwt(data)
                navigate("/")
            })
            .catch((err)=>console.error("Error"))
    }


    return (
        <div className={"loginElements"}>
            <TextField variant="outlined" label="Username" type="username" value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>
            <TextField variant="filled" label="Password" type="password" value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}/>
            <Button onClick={() => login()} variant="outlined">Login</Button>
                <Button variant="outlined" href="/">MainPage</Button>
        </div>
    )
}