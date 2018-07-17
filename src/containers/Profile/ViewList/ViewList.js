import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
}
const ViewList = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={2}>
                {props.locations.map(tile => (
                    <GridListTile key={tile.photo_id} cols={parseInt(Math.random(0, 5)) % 2 || 1} className="gridList">
                        <img src={tile.photo_file_url} alt={tile.photo_title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default withStyles(styles)(ViewList);