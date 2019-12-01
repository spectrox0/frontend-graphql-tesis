import React from 'react';

export default function SideBar({options, changeOption}) {
    return (
    <nav> 
        <ul> 
            <li className={options===0 &&"active"}
             onClick={() => changeOption(0)}>
                Chats
            </li>
            <li className={options===1 &&"active"}
                onClick={() => changeOption(1)}> 
                Categories
            </li>
            <li className={options===2 &&"active"}
                onClick={() => changeOption(2)}> 
                Create
            </li>
        </ul>
    </nav>)
}