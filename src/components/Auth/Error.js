import React from 'react';


export default function ({touched, message}) {
  
    if(!touched)return <div className="error">
    </div>

    if(message) return <div className="error">
        {message}
    </div>

    return <div className="message-correct">
       All god
    </div>
}