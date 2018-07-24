import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import WritePost from './WritePost'
import Privacy from './Privacy'
import Photo from './Photo'
import Emoji from './Emoji'
import GeolocationExample from './GeolocationExample'

class WriteIndex extends Component {
    state = {
        backHome: false,
        writePost: true,
        setPrivacy: false,
        setPhoto: false,
        setEmoji: false,
        setAddress: false,
        privacy: 'Public',
        photo_url: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
        emoji: 0x1F600,
    }

    toHome = () => {
        this.setState({ backHome: true,
        setPhoto: false,
        writePost: false,
        setPrivacy: false,
        setEmoji: false,
        setAddress: false, });
    }

    toPrivacy = () => {
        this.setState({ backHome: false,
        writePost: false,
        setPrivacy: true,
        setPhoto: false,
        setEmoji: false,
        setAddress: false, });
    }

    toWrite = () => {
        this.setState({ backHome: false,
        writePost: true,
        setPrivacy: false,
        setPhoto: false,
        setEmoji: false,
        setAddress: false, });
    }

    toPhoto = () => {
        this.setState({ backHome: false,
        writePost: false,
        setPrivacy: false,
        setPhoto: true,
        setEmoji: false,
        setAddress: false, });
    }

    toEmoji = () => {
        this.setState({ backHome: false,
        writePost: false,
        setPrivacy: false,
        setPhoto: false,
        setEmoji: true,
        setAddress: false, });
    }

    toAddress = () => {
        this.setState({ backHome: false,
        writePost: false,
        setPrivacy: false,
        setPhoto: false,
        setEmoji: false,
        setAddress: true, });
    }

    setPrivate = () => {
        this.setState({ privacy: 'Private', 
        writePost: true,
        setPrivacy: false,});
    }

    setPublic = () => {
        this.setState({ privacy: 'Public', 
        writePost: true,
        setPrivacy: false,});
    }

    setPhotoUrl = (url) =>{
        this.setState({
        photo_url: url,
        writePost: true,
        setPhoto: false,});
    }

    choseEmoji = (emoji) =>{
        this.setState({
        emoji: emoji,
        writePost: true,
        setEmoji: false,});
    }
    componentDidMount(){
    }

    render() {
        let showPage = <WritePost
            privacy = {this.state.privacy}
            photo_url = {this.state.photo_url}
            emoji = {this.state.emoji}
            toPrivacy={this.toPrivacy.bind(this)}
            toPhoto={this.toPhoto.bind(this)}
            toAddress={this.toAddress.bind(this)}
            toEmoji={this.toEmoji.bind(this)}/>;
        if (this.state.setPrivacy) {
            showPage = <Privacy
            setPrivate={this.setPrivate.bind(this)}
            setPublic={this.setPublic.bind(this)}              
            toWrite={this.toWrite.bind(this)}/>
        }else if(this.state.setPhoto){
            showPage = <Photo
            setPhotoUrl={this.setPhotoUrl.bind(this)}
            toWrite={this.toWrite.bind(this)}/>
        }else if (this.state.setEmoji){
            showPage = <Emoji
            choseEmoji={this.choseEmoji.bind(this)}
            toWrite={this.toWrite.bind(this)}/>
        }else if (this.state.setAddress){
            showPage = <GeolocationExample

            toWrite={this.toWrite.bind(this)}/>
        }
        return (
            <div>
                {showPage}
            </div>
        );
    }
}

export default WriteIndex;