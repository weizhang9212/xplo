import React, { Component } from 'react';
import BotBar from '../../components/BotBar/BotBar'
import TopBar from '../../components/TopBar/TopBar'
import { Divider } from 'material-ui';
import MapContainer from '../MapContainer/MapContainer'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile'
import FullPost from '../FullPost/FullPost'
import SideBar from '../../components/SideBar/SideBar'
import PostImage from '../../components/PostShow/PostImage.js'
class PageWrapper extends Component{

        state={
            sideOpen : false
        }
        render(){
            return(
                <div>
                    <SideBar 
                    open = {this.state.sideOpen}
                    />
                    <Switch>
                        <Route path = "/" exact component = {MapContainer}/>
                        <Route path = "/profile/:id" component = {Profile}/>
                        <Route path = "/post/:id" component = {FullPost}/>
                        <Route path = "/image/:id" component = {PostImage}/>
                    </Switch>
                    <BotBar/>
                </div>
            )
        }
}

export default PageWrapper;