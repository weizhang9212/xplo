import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Route, Link } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: '54vh'
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    subheader: {
        width: '100%',
    },
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    icon: {
        color: 'white',
    },
}
const ViewList = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={1}>
                {props.locations.map(tile => (
                    <GridListTile key={tile.photo_id} rows={2} className="gridList">
                        <Link to='/post/12341'><img src={tile.photo_file_url} alt={tile.photo_title} /></Link>
                        <GridListTileBar
                            title={tile.photo_title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default withStyles(styles)(ViewList);