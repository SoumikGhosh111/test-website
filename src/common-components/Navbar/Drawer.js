import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import {Switch} from '@mui/material';
import "./Navbar.css"
import zIndex from '@mui/material/styles/zIndex';

export default function TemporaryDrawer() {
    let [isOpen, setOpen] = useState(false);

    return (
        <div>

            <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className='link' sx={{color: "var(--white)"}}/></IconButton>
            <Drawer
                anchor={"right"}    
                open={isOpen}
                onClose={() => setOpen(false)}
                sx={{zIndex: "1"}}
            >
                <div className='drawer-div'>
                    <a href='/' className='link'><p>Home</p></a>
                    <a href='/about' className='link'><p>About Us</p></a>
                    <a href='/services' className='link'><p>Services</p></a>
                    <a href='/blogs' className='link'><p>News</p></a>
                   {/* <SwitchModes /> */}
                </div>
            </Drawer>
        </div>
    );
}