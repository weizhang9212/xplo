import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import SvgIcon from '@material-ui/core/SvgIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import fakeData from './fakeData.js'
import { Route, Link } from 'react-router-dom';

import './PostShow.css'


const styles = theme => ({
  card: {
    width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
    height: '75vh'
  },
  media: {
    height: '19%',
    paddingTop: '40%', // 16:9
    width: '60%',
    marginLeft: '20%',
    borderRadius: 10,
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
var allComment = "";

function AddComments(item, index) {
  //console.log(allComment);
  var slice = item.user_id + ":  "+ item.user_comment;
  if (slice.length >= 50) {
    slice = slice.slice(0,50) + "\n"+slice.slice(50,slice.length);
  }
  allComment = allComment + slice + "\n";
  return allComment;
}

class PostShow extends Component {
  state ={
            title:null,
            postDetail : null,
            postReview : [],
            img : null,
            date: null,
            owner_name: null,
            expanded: false 
        }

        // componentDidMount(){
            
        //     this.setState(
        //         {
        //         title:       fakeData.photo_title,
        //         postDetail : fakeData.detail,
        //         postReview : fakeData.review,
        //         img :        fakeData.photo_file_url,
        //         date:        fakeData.upload_date,
        //         owner_name:  fakeData.owner_name
        //         }
        //     );
        //     console.log(" markers will mount " + fakeData.owner_name);
        //      //var title=fakeData.photo_title;
        // }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    const { classes } = this.props;
    var DraftComment = fakeData.review.forEach(AddComments);
    //console.log(" markers will mount " + DraftComment);
    //const {owner_name} = this.state.owner_name;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {fakeData.owner_name.slice(0,1)}
              </Avatar>
            }
            action={
              <IconButton button component={Link} to="/">
              
                <HomeIcon className={classes.icon}/> 
              </IconButton>             
            }
            title={fakeData.photo_title}
            subheader={fakeData.upload_date}
          />
          
          <CardMedia
            className={classes.media}
            image={fakeData.photo_file_url}
            title="Contemplative Reptile"
          />
          <CardContent>
          <center>
            <Typography component="p">
              {fakeData.detail}                 
            </Typography> 
            </center>
          </CardContent>
          <div id="comments" >
           <ul>
            {fakeData.review.map(review => (
            <li key = {review.user_id} style = {{color: 'blue'}}> 
                {review.user_id}
                <span style = {{color: 'black'}}> 
                : {review.user_comment}
                </span>
            </li>            
            ))}
           </ul>
          </div>
        </Card>
      </div>
    );
  }
}

PostShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostShow);



// {allComment.split("\n").map((i,key) => {
//              return <p key = {key}>{i} </p>;
//              })}