import "./SecPage.scss"
import NavigationBar from "../Components/NavigationBar";
import React from "react";

export default function SecPage() {
    // const STORAGE_KEY = 'myValueKey';
    //
    // const [value, setValue] = React.useState(
    //     localStorage.getItem(STORAGE_KEY) || ''
    // );
    //
    // React.useEffect(() => {
    //     localStorage.setItem(STORAGE_KEY, value);
    // }, [value]);


    return (
        <div className="secpage">
            <h1 className="head">Liste</h1>
            <NavigationBar/>
            {/*<input value={value} type="text"*/}
            {/*       onChange={event => setValue(event.target.value)} />*/}
            {/*<p>{value}</p>*/}
        </div>
    )
}