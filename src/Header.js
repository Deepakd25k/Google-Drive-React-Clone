import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';


function Header() {
    return(
        <div class="header">
            <div className="header_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"/>
            <span>Drive</span>

            </div>
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="search in drive"/>
                <FormatAlignCenterIcon/>
                
            </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>

                </span>
    
                <span>
                    <AppsIcon/>
                    <Avatar/>
                </span>

                
            </div>
        </div>
    )
}
export default Header