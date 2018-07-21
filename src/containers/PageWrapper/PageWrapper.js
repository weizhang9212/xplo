import React, { Component } from 'react';
import BotBar from '../../components/BotBar/BotBar'
import TopBar from '../../components/TopBar/TopBar'
import { Divider } from 'material-ui';
import MapContainer from '../MapContainer/MapContainer'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile'
import FullPost from '../FullPost/FullPost'
import SideBar from '../../components/SideBar/SideBar'
import User from '../User/User'
import PostImage from '../../components/PostShow/PostImage.js'
import WritePost from '../../components/WritePost/WriteIndex.js'
import Privacy from '../../components/WritePost/Privacy.js'

class PageWrapper extends Component {

    state = {
        sideOpen: false,
        logIn: true,
        id : 132434
    }
    newPost = () => {
        console.log("new post");
    }

    render() {
        return (
            <div>
                <div id="center"
                    style={{
                        position: 'absolute',
                        left: '25%',
                        top: '60%',
                        zIndex: 0
                    }}></div>
                {/* <TopBar/> */}
                <SideBar
                    open={this.state.sideOpen}
                />

                <Switch onClick={this.newPost}>
                    <Route path="/profile/:id" exact component={Profile} />
                    <Route path="/post/:id" exact component={FullPost} />
                    <Route path="/map/:id" exact component={MapContainer}/>
                    <Route path="/post/:id/image" component = {PostImage}/>
                    <Route path="/writePost/:id" component = {WritePost}/>
                    <Route path='/' component={MapContainer}
                    render={() => (
                        this.state.logIn ? (
                            <Redirect to={"/map/"+ this.state.id} />
                        ) : (
                                <User logIn = {this.logIn.bind(this)}/>
                            )
                    )}
                />
                </Switch>
                <BotBar />
            </div>
        )
    }
}

export default PageWrapper;