import React, { useState } from 'react';
import Header from './HeaderSideBar';
import Menu from './Menu'
import Conversation from './Conversations';
import InfoUser from './InfoUser'

export default function SideBar({isOpenSideBar , onClick}) {
    const [options , setOptions] = useState(0);

    const changeOption = (value) => {
        if(value!==options) setOptions(value);
    }
    return (<>
       <div className={isOpenSideBar? "sideBar isOpen": "sideBar"}> 
        <Header onClick={onClick} />
        <Menu options={options} changeOption={changeOption} />
        <Conversation/>
        <InfoUser/>
        </div> </>)
}