import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {


    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavigationBar() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Shoppinglist" href="/" />
                <LinkTab label="Page Two" href="/sec" />
                <Button onClick={() => navigate(-1)}>Back</Button>
            </Tabs>
            {/*<button className="back" onClick={() => navigate(-1)}>Back</button>*/}
        </Box>
    );
}