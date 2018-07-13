import React, { Component } from 'react';
import BotBar from '../../components/BotBar/BotBar'
import TopBar from '../../components/TopBar/TopBar'
import { Divider } from 'material-ui';
import MapContainer from '../MapContainer/MapContainer'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile'
import FullPost from '../FullPost/FullPost'

class PageWrapper extends Component{
        render(){
            return(
                <div>
                    <TopBar/>
                    <Switch>
                        <Route path = "/" exact component = {MapContainer}/>
                        <Route path = "/profile/:id" component = {Profile}/>
                        <Route path = "/post/:id" component = {FullPost}/>
                    </Switch>
                    <BotBar/>
                </div>
            )
        }
}

export default PageWrapper;