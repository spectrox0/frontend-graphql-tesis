import React from 'react';
import Toggle from '../toggle.js'
export default function HeaderSideBar({onClick}) {

  return (<header>
      <h1> Tesis </h1>
      <Toggle onClick={onClick} />
     
  </header>  )

}