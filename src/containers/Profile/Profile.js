import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import red from '@material-ui/core/colors/red'
import brown from '@material-ui/core/colors/brown'
import gray from '@material-ui/core/colors/grey'
import pink from '@material-ui/core/colors/pink'


import RoomIcon from '@material-ui/icons/Room';
import Viewlist from '@material-ui/icons/Dehaze'
import Maplist from '@material-ui/icons/CenterFocusWeak'
import PersonAdd from '@material-ui/icons/PersonAdd'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import AppList from '@material-ui/icons/Apps'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import GridList from './GridList/GridList';
import MapList from './MapList/MapList';
import SingleList from './SingleList/SingleList'

import './Profile.css'


const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center'
    },

    avatar: {
        marginLeft: '20%',
        marginTop: '25%'
    },
    bigAvatar: {
        // border: 'solid 5px black',
        width: 80,
        height: 80,
    },
    Avatar: {
        marginLeft: '35%',
        marginBottom: '10px'
    },

    likes: {
        marginTop: '10%',
        textAlign: 'center'
    },
    pinkAvatar: {
        marginLeft: '35%',
        marginBottom: '10px',
        color: '#fff',
        backgroundColor: pink[500],
    },
    choises: {
        clear: 'both',
        height: '8vh',
        backgroundColor: gray[10],
    }

};


class Profile extends Component {

    state = {
        locations: [
            { "photo_id": 27932, "photo_title": "Atardecer en Embalse", "photo_url": "http://www.panoramio.com/photo/27932", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/27932.jpg", "longitude": -64.404945, "latitude": -32.202924, "width": 500, "height": 375, "upload_date": "25 June 2006", "owner_id": 4483, "owner_name": "Miguel Coranti", "owner_url": "http://www.panoramio.com/user/4483" }
            ,
            { "photo_id": 522084, "photo_title": "In Memoriam Antoine de Saint Exupéry", "photo_url": "http://www.panoramio.com/photo/522084", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/522084.jpg", "longitude": 17.470493, "latitude": 47.867077, "width": 500, "height": 350, "upload_date": "21 January 2007", "owner_id": 109117, "owner_name": "Busa Péter", "owner_url": "http://www.panoramio.com/user/109117" }
            ,
            { "photo_id": 1578881, "photo_title": "Rosina Lamberti,Sunset,Templestowe , Victoria, Australia", "photo_url": "http://www.panoramio.com/photo/1578881", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/1578881.jpg", "longitude": 145.141754, "latitude": -37.766372, "width": 500, "height": 474, "upload_date": "01 April 2007", "owner_id": 140796, "owner_name": "rosina lamberti", "owner_url": "http://www.panoramio.com/user/140796" }
            ,
            { "photo_id": 97671, "photo_title": "kin-dza-dza", "photo_url": "http://www.panoramio.com/photo/97671", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/97671.jpg", "longitude": 30.785408, "latitude": 46.639301, "width": 500, "height": 375, "upload_date": "09 December 2006", "owner_id": 13058, "owner_name": "Kyryl", "owner_url": "http://www.panoramio.com/user/13058" }
            ,
            { "photo_id": 25514, "photo_title": "Arenal", "photo_url": "http://www.panoramio.com/photo/25514", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/25514.jpg", "longitude": -84.693432, "latitude": 10.479372, "width": 500, "height": 375, "upload_date": "17 June 2006", "owner_id": 4112, "owner_name": "Roberto Garcia", "owner_url": "http://www.panoramio.com/user/4112" }
            ,
            { "photo_id": 57823, "photo_title": "Maria Alm", "photo_url": "http://www.panoramio.com/photo/57823", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/57823.jpg", "longitude": 12.900009, "latitude": 47.409968, "width": 500, "height": 333, "upload_date": "05 October 2006", "owner_id": 8060, "owner_name": "Norbert MAIER", "owner_url": "http://www.panoramio.com/user/8060" }
            ,
            { "photo_id": 532693, "photo_title": "Wheatfield in afternoon light", "photo_url": "http://www.panoramio.com/photo/532693", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/532693.jpg", "longitude": 11.272659, "latitude": 59.637472, "width": 500, "height": 333, "upload_date": "22 January 2007", "owner_id": 39160, "owner_name": "Snemann", "owner_url": "http://www.panoramio.com/user/39160" }
            ,
            { "photo_id": 57819, "photo_title": "Burg Hohenwerfen", "photo_url": "http://www.panoramio.com/photo/57819", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/57819.jpg", "longitude": 13.189259, "latitude": 47.483221, "width": 500, "height": 333, "upload_date": "05 October 2006", "owner_id": 8060, "owner_name": "Norbert MAIER", "owner_url": "http://www.panoramio.com/user/8060" }
            ,
            { "photo_id": 1282387, "photo_title": "Thunderstorm in Martinique", "photo_url": "http://www.panoramio.com/photo/1282387", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/1282387.jpg", "longitude": -61.013432, "latitude": 14.493688, "width": 500, "height": 400, "upload_date": "12 March 2007", "owner_id": 49870, "owner_name": "Jean-Michel Raggioli", "owner_url": "http://www.panoramio.com/user/49870" }
            ,
            { "photo_id": 945976, "photo_title": "Al tard", "photo_url": "http://www.panoramio.com/photo/945976", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/945976.jpg", "longitude": 0.490866, "latitude": 40.903783, "width": 335, "height": 500, "upload_date": "21 February 2007", "owner_id": 3022, "owner_name": "Arcadi", "owner_url": "http://www.panoramio.com/user/3022" }
            ,
            { "photo_id": 73514, "photo_title": "Hintersee bei Ramsau", "photo_url": "http://www.panoramio.com/photo/73514", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/73514.jpg", "longitude": 12.852459, "latitude": 47.609519, "width": 500, "height": 333, "upload_date": "30 October 2006", "owner_id": 8060, "owner_name": "Norbert MAIER", "owner_url": "http://www.panoramio.com/user/8060" }
            ,
            { "photo_id": 298967, "photo_title": "Antelope Canyon, Ray of Light", "photo_url": "http://www.panoramio.com/photo/298967", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/298967.jpg", "longitude": -111.407890, "latitude": 36.894037, "width": 500, "height": 375, "upload_date": "04 January 2007", "owner_id": 64388, "owner_name": "Artusi", "owner_url": "http://www.panoramio.com/user/64388" }

        ],
        showMap: false,
        add: false,
        like: false,
        viewValue: "gridView"
    }

    mapShow = () => {
        this.setState({ showMap: true });
    }

    mapClose = () => {
        this.setState({ showMap: false });
    }

    shouldComponentUpdate(nextProps, nextState) {

        return this.state.showMap !== nextState.showMap ||
            this.state.like !== nextState.like ||
            this.state.add !== nextState.add ||
            this.state.viewValue !== nextState.viewValue;
    }

    routeToProfile(id) {
        this.props.history.push('/profile/' + id);
    }

    routeToPost(id) {
        this.props.history.push('/post/' + id);
    }

    personLike = () => {
        console.log("personlike");
        let likeTmp = !this.state.like;
        this.setState({ like: likeTmp });
    }

    personAdd = () => {
        console.log("person add");
        let addTmp = !this.state.add;
        this.setState({ add: addTmp });
        console.log(this.state.add);
    }

    handleChange = (event, value) => {
        let tmp = value;
        this.setState({ viewValue: value });
    };


    render() {
        console.log("render");
        const { classes } = this.props;
        let show = <GridList locations={this.state.locations}
            toProfile={this.routeToProfile.bind(this)}
            toPost={this.routeToPost.bind(this)}
        />
        if (this.state.viewValue === "mapView") {
            show = <MapList
                locations={this.state.locations}
                toProfile={this.routeToProfile.bind(this)}
                toPost={this.routeToPost.bind(this)}
            />
        }

        if (this.state.viewValue === "listView") {
            show = <SingleList
                locations={this.state.locations}
                toProfile={this.routeToProfile.bind(this)}
                toPost={this.routeToPost.bind(this)}
            />
        }

        // let show = <MapList
        //     locations={this.state.locations}
        //     toProfile={this.routeToProfile.bind(this)}
        //     toPost={this.routeToPost.bind(this)}
        // />;
        // if (this.state.showMap === false) {
        //     console.log(false);
        //     show = <ViewList locations={this.state.locations}
        //         toProfile={this.routeToProfile.bind(this)}
        //         toPost={this.routeToPost.bind(this)}
        //     />
        // }
        return (

            <div>
                <div>
                    <div >
                        <div className={"top"}>
                            <Grid container>
                                <Grid item xs={4} >
                                    <Avatar alt="Remy Sharp" className={classNames(classes.avatar, classes.bigAvatar)} src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" />
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container className={classes.likes}>
                                        <Grid item xs={4}>
                                            <p className="number">500</p>
                                            <p className="numberType">posts</p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className="number">500</p>
                                            <p className="numberType">fellowers</p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className="number">500</p>
                                            <p className="numberType">fellowing</p>
                                        </Grid>
                                    </Grid>

                                    <Grid className = {"test"}container>
                                        <Grid item xs={6}>
                                            <Avatar className={this.state.add ? classes.pinkAvatar : classes.Avatar} >
                                                <PersonAdd style={{ fontSize: 20 }} onClick={this.personAdd}></PersonAdd>
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Avatar className={this.state.like ? classes.pinkAvatar : classes.Avatar}>
                                                <FavoriteBorder style={{ fontSize: 20 }} onClick={this.personLike}></FavoriteBorder>
                                            </Avatar>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>

                <div className={"mid"}>
                    <h1 className={"name"}>name</h1>
                    <p className={"identify"}>some thing about my self</p>
                </div>
                <Divider />

                <div className={classes.choises}>
                    <BottomNavigation value={this.state.viewValue} onChange={this.handleChange}>
                        <BottomNavigationAction value="gridView" icon={<AppList />} />
                        <BottomNavigationAction value="listView" icon={<Viewlist />} />
                        <BottomNavigationAction value="mapView" icon={<Maplist />} />
                        <BottomNavigationAction value="Favorites" icon={<FavoriteBorder />} />
                    </BottomNavigation>
                    {/* <Grid container>
                        <Grid item xs = {3} style = {{backgroundColor : "red"}}>
                            <AppList style = {{fontSize :36}}className = "choiseIcon"></AppList>
                        </Grid>
                        <Grid item xs = {3}>
                            <Viewlist style = {{fontSize :36}}className = "choiseIcon"></Viewlist>
                        </Grid>
                        <Grid item xs = {3}>
                            <Maplist style = {{fontSize :36}}className = "choiseIcon"> </Maplist>
                        </Grid>
                        <Grid item xs = {3}>
                            <FavoriteBorder style = {{fontSize :36}}className = "choiseIcon"></FavoriteBorder>
                        </Grid>
                    </Grid> */}
                </div>
                <Divider></Divider>
                {show}


                {/* <Grid container className={classNames(classes.pages)}>
                        <Grid item xs className="choises">
                            <Maplist style={{ fontSize: 36 }} className={classes.choise} onClick={this.mapShow} />
                        </Grid>
                        <Grid item xs className="choises">
                            <Viewlist style={{ fontSize: 36 }} className={classes.choise} onClick={this.mapClose} />
                        </Grid>
                    </Grid> */}

                {/* {show} */}



            </div>
        );
    }
}

export default withStyles(styles)(Profile);