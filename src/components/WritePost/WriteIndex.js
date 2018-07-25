import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import WritePost from './WritePost'
import Privacy from './Privacy'
import Photo from './Photo'
import Emoji from './Emoji'
import Img from './FullImage'
import Address from './Address'

class WriteIndex extends Component {
    state = {
        checkImg: false,
        backHome: false,
        writePost: true,
        setPrivacy: false,
        setPhoto: false,
        setEmoji: false,
        setAddress: false,
        privacy: 'Public',
        photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DyJgSZ9l-M88a6vhh-ZzXWPGcsqTYpuWelSWOvWi-nm98Jpn",
        emoji: 0x1F600,
        description: '',
    }

    setImg = (url) =>{
        this.setState({
            photo_url : url 
        })
    }

    toImage = (description) => {
        this.setState({
            description: description,
            checkImg: true,
            backHome: false,
            setPhoto: false,
            writePost: false,
            setPrivacy: false,
            setEmoji: false,
            setAddress: false,
        });
    }

    toHome = () => {
        this.setState({
            checkImg: false,
            backHome: true,
            setPhoto: false,
            writePost: false,
            setPrivacy: false,
            setEmoji: false,
            setAddress: false,
        });
    }

    toPrivacy = (description) => {
        this.setState({
            description: description,
            checkImg: false,
            backHome: false,
            writePost: false,
            setPrivacy: true,
            setPhoto: false,
            setEmoji: false,
            setAddress: false,
        });
    }

    toWrite = () => {
        this.setState({
            checkImg: false,
            backHome: false,
            writePost: true,
            setPrivacy: false,
            setPhoto: false,
            setEmoji: false,
            setAddress: false,
        });
    }


    toEmoji = (description) => {
        this.setState({
            description: description,
            checkImg: false,
            backHome: false,
            writePost: false,
            setPrivacy: false,
            setPhoto: false,
            setEmoji: true,
            setAddress: false,
        });
    }

    toAddress = (description) => {
        this.setState({
            description: description,
            checkImg: false,
            backHome: false,
            writePost: false,
            setPrivacy: false,
            setPhoto: false,
            setEmoji: false,
            setAddress: true,
        });
    }

    setPrivate = () => {
        this.setState({
            privacy: 'Private',
            writePost: true,
            setPrivacy: false,
        });
    }

    setPublic = () => {
        this.setState({
            privacy: 'Public',
            writePost: true,
            setPrivacy: false,
        });
    }

    setPhotoUrl = (url) => {
        this.setState({
            photo_url: url,
            writePost: true,
            setPhoto: false,
        });
    }

    choseEmoji = (emoji) => {
        this.setState({
            emoji: emoji,
            writePost: true,
            setEmoji: false,
        });
    }
    componentDidMount() {
    }

    render() {
        console.log(this.state);
        let showPage = <WritePost
            description = {this.state.description}
            privacy={this.state.privacy}
            setImg = {this.setImg.bind(this)}
            emoji={this.state.emoji}
            photo_url = {this.state.photo_url}
            toPrivacy={this.toPrivacy.bind(this)}
            toImage = {this.toImage.bind(this)}
            toAddress={this.toAddress.bind(this)}
            toEmoji={this.toEmoji.bind(this)} />;

        if (this.state.setPrivacy) {
            showPage = <Privacy
                setPrivate={this.setPrivate.bind(this)}
                setPublic={this.setPublic.bind(this)}
                toWrite={this.toWrite.bind(this)} />
        } else if (this.state.setPhoto) {
            showPage = <Photo
                setPhotoUrl={this.setPhotoUrl.bind(this)}
                toWrite={this.toWrite.bind(this)} />
        } else if (this.state.setEmoji) {
            showPage = <Emoji
                choseEmoji={this.choseEmoji.bind(this)}
                toWrite={this.toWrite.bind(this)} />
        } else if (this.state.setAddress) {
            showPage = <Address

            toWrite={this.toWrite.bind(this)}/>
        } else if (this.state.checkImg) {
            showPage = <Img
                img = {this.state.photo_url}
                toWrite={this.toWrite.bind(this)}
            />
        }
        return (
            <div>
                {showPage}
            </div>
        );
    }
}

export default WriteIndex;