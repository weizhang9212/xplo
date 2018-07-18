import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/AddCircleOutline'
import React from 'react';
import { Route, Link } from 'react-router-dom';
const styles = {
    root: {
      height: '10%',
      width: '100%',
      position : 'fixed',
      bottom: 0,
      zIndex : 3
    },
  };
  
  class SimpleBottomNavigation extends React.Component {
    state = {
      value: 0,
    };
    
    componentWillMount(){
      console.log(this.props);
    }
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <BottomNavigation 
        position="fixed"
          value={value }
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} component={Link} to="/"/>
          <BottomNavigationAction icon={<AddIcon  style = {{fontSize : 60}}/>} component={Link} to="/add"/>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/profile/self"/>
        </BottomNavigation>
      );
    }
  }
  
  
  export default withStyles(styles)(SimpleBottomNavigation);