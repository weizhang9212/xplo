import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey'
import CheckIcon from '@material-ui/icons/Check'
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { Divider } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import './Login.css'


const styles = ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
    },
    iconHover: {
        '&:hover': {
            color: red[800],
        },
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        border: '10px solid rgba(255, 255, 255, .5)',
        borderTop: '-10px',
        background: 'white',
        backgroundClip: 'padding-box'
    },
    textField: {
        width: 200,
    },
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
        </SvgIcon>
    );
}

class Login extends Component {
    state = {
        preUser: null,
        name: "Wei Zhang",
        icon: "sdfasdfasdf",
        username: "",
        password: ""
    }


    render() {
        console.log(this.props);
        const { classes } = this.props;
        let userName = (<div className="password">
        <TextField
            id="username-input"
            label="username"
            className={classes.textField}
            type="username"
            autoComplete="current-username"
            margin="normal"
        />
    </div>);
        if(this.state.preUser !== null){
            userName = (<div className="headIcon">
            <Avatar
                alt="Adelle Charles"
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </div>);
        }
        return (
            <div className="root_sign">
                <div className="backGound">
                    <div className="rightBar">
                        <HomeIcon
                            className={classes.icon}
                            color="primary"
                            style={{
                                fontSize: 200,
                                position: "relative",
                                top: -10
                            }}
                            component={svgProps => (
                                <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                            <stop offset="30%" stopColor={blue[200]} />
                                            <stop offset="70%" stopColor={blue[100]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
                                </svg>
                            )}
                        />
                    </div>

                    <div className="nameBar">
                        {/* <p>Welcome  {this.state.name}</p> */}
                       {userName}
                    </div>

                    <div className="password">
                        <TextField
                            id="password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </div>

                    <div className="redirect">
                        <p className="signup" onClick = {()=>{console.log("log in")}}> L O G I N</p>
                        <Divider />
                        <p className="signup" onClick = {this.props.toSignup}> S I G N U P </p>
                        <Divider />
                    </div>

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);