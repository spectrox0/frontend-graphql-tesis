import React, { useState } from 'react';
import Header from './HeaderSideBar';
import Menu from './Menu'
import Conversation from './Conversations';
import Settings from './Settings'
import InfoUser from './InfoUser'

export default function SideBar({isOpenSideBar , onClick}) {
    const [options , setOptions] = useState(0);
    const [isOpenSettings , setIsOpenSettings] = useState(false);
    const openSettings = () => {
        setIsOpenSettings(!isOpenSettings);
    }
    const changeOption = (value) => {
        if(value!==options) setOptions(value);
    }
    return (<>
       <div className={isOpenSideBar? "sideBar isOpen": "sideBar"}> 
         <div> 
        <Header onClick={onClick} />
        <Menu options={options} changeOption={changeOption} />
        </div>
        <Conversation/>
        <InfoUser toggle={openSettings} />
        <Settings toggle={openSettings} isOpen={isOpenSettings} />
        </div> </>)
}