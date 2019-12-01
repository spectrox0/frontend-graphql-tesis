import React from 'react'
import {Route, Switch, Redirect  } from 'react-router-dom';
import Home from '../../views/Home.js'
import Auth from '../../views/Auth.js'

export default function Routes ({isAuth}) {

  return (
      <Switch>
        
        { isAuth? <Route path="/" render={ (props) =>   <Home {...props} />} />: 
         <Route path="/" render={ (props) =>   <Auth {...props} />} />
        }
        <Redirect to="/" />
          
      </Switch>
  )

}