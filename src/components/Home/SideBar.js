import React, { useState } from 'react';
import Header from './HeaderSideBar';
import Menu from './Menu'
import Conversation from './Conversations';
import InfoUser from './InfoUser'

export default function SideBar() {
    const [options , setOptions] = useState(0);

    const changeOption = (value) => {
        if(value!==options) setOptions(value);
    }
    return (<>
       <div className="sideBar"> 
        <Header/>
        <Menu options={options} changeOption={changeOption} />
        <Conversation/>
        <InfoUser/>
        </div> </>)
}