import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey'
import CheckIcon from '@material-ui/icons/Check'
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
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </SvgIcon>
    );
}

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="backGound">
                    <div className="rightBar">
                        <HomeIcon
                            className={classes.icon}
                            color="primary"
                            style={{ fontSize: 200 ,
                                    position : "absolute",
                                    top : "2%",
                                    left : "27%"}}
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
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);