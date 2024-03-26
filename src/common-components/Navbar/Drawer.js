import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import {Switch} from '@mui/material';
import "./Navbar.css"
import zIndex from '@mui/material/styles/zIndex';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'; 
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';

export default function TemporaryDrawer() {
    let [isOpen, setOpen] = useState(false);

    return (
        <div >

            <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon  sx={{color: "var(--white)"}}/></IconButton>
            <Drawer
                anchor={"right"}    
                open={isOpen}
                onClose={() => setOpen(false)}
                sx={{zIndex: "999"}}
            >
                <div className='drawer-div'>
                    <a href='/' ><div className='link'> <div className='drawer-link-items'><HomeRoundedIcon /></div>Home</div></a>
                    <a href='/services' ><div className='link'><div className='drawer-link-items'><DesignServicesRoundedIcon  /></div>Services</div></a>
                    <a href='/about' ><div className='link'><div className='drawer-link-items'><InfoRoundedIcon  /></div>About Us</div></a>
                    <a href='/blogs' ><div className='link'><div className='drawer-link-items'><NewspaperRoundedIcon /></div>News</div></a>
                   {/* <SwitchModes /> */}
                </div>
            </Drawer>
        </div>
    );
}