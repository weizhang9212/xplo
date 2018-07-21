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
import AddButton from '../AddList/AddList'
import { Divider } from 'material-ui';
import classNames from 'classnames';
import { connect } from 'react-redux'

const styles = {
  root: {
    height: '13%',
    width: '100%',
    position: 'fixed',
    bottom: 1,
    zIndex: 3
  },
  AddButton :{
    position : 'fixed',
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  componentWillMount() {
  }
  handleChange = (event, value) => {
    this.props.switch(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>

        <BottomNavigation
          position="fixed"
          value={this.props.page}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} component={Link} to="/" />
          <BottomNavigationAction  icon={<AddButton />} />
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/profile/self" />
        </BottomNavigation>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.currentPage
  };
}

const mapDispatchToProps = dispatch =>{
    return {
      switch: (val)=>{dispatch({ type : 'BOTBAR', choice : val});}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SimpleBottomNavigation));