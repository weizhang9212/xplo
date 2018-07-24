import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/AddCircleOutline'

const styles = {
    list :{
        width : "100%"
    }
};

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        console.log(event.currentTarget);
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { classes } = this.props;
        const center = document.getElementById("center");
        console.log(classes.menu)

        return (
            <div>

                <AddIcon
                    style={{
                        fontSize: 57,
                        marginTop: '-10%'
                    }}
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                ></AddIcon>
                {/* <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button> */}
                <div>
                    <Menu
                        id="simple-menu"
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        anchorEl={center}
                    >
                        <Link to= {"/writePostPic/sadfasdf"} style = {{textDecoration: 'none'}}>  
                            <MenuItem  className={classes.list} onClick={this.handleClose }>
                                <p style ={{
                                     height : 30,
                                     width : '40%'
                                     }}>Take a pic</p>
                            </MenuItem>
                        </Link>
                        <Link to= {"/writePost/:id"} style = {{textDecoration: 'none'}}>
                            <MenuItem  className={classes.list} onClick={this.handleClose}>
                                <p style ={{ 
                                    height : 30,
                                    width : '40%'
                                    }}>Select from Phone</p>
                            </MenuItem>
                        </Link>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleMenu);