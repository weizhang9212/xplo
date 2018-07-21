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

import fakeData from './fakeData.js';
import { Route, Link } from 'react-router-dom';

import './PostShow.css';

import classNames from 'classnames';
import { Divider } from '@material-ui/core';
const styles = theme => ({
  header: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },

  content: {
    padding: '5%',
  },
  card: {
    width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
    backgroundColor:'#f9f9f9',
    //height: '90vh'
  },
  media: {
    paddingTop: '110%', // 16:9
    width: '100%',
    marginLeft: '0',
    borderRadius: 10,
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    msInterpolationMode: 'bicubic',
  },
  actions: {
    display: 'flex',
    paddingTop: '7%',
    paddingBottom: '6%',
    height: 0,
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
    backgroundColor: '#d32600',
    marginLeft: '40%',
  },

  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: '#d32600',
    },
  },
  liked: {
    color: red[500],
    width: '10%',
    paddingLeft: '7%',
    paddingRight: '6%',
  },
  unliked: {
    width: '10%',
    paddingLeft: '7%',
    paddingRight: '6%',
  },
  likedPeople: {
    color: '#41a3f4',
    width: '3%',
    height: '1%',
    paddingLeft: '5%',
  }
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


class PostShow extends Component {
  state ={
            title:null,
            postDetail : null,
            postReview : [],
            img : null,
            date: null,
            owner_name: null,
            like: false,
            likes: 0, 
            expand: false,
        }

        componentDidMount(){
            
            this.setState(state => (
                {
                title:       fakeData.photo_title,
                postDetail : fakeData.detail,
                postReview : fakeData.review,
                img :        fakeData.photo_file_url,
                date:        fakeData.upload_date,
                owner_name:  fakeData.owner_name,
                expand: false,
                like: false,
                likes: fakeData.likes,
                }
            ));
            //console.log(" markers will mount " + this.state.likes);             
        }

        likeClick = () => {
          if (this.state.like){
            this.setState(state => ({ like: false }));
            this.setState(state => ({ likes: this.state.likes - 1 }));
          }else{
            this.setState(state => ({ like: true }));
            this.setState(state => ({ likes: this.state.likes + 1}));
          }

        }

        handleExpandClick = () => {
          this.setState(state => ({ expanded: !state.expanded }));
        };

  // commentClick = () => {
  //   var commentPop = document.getElementById("commentPanel");
  //   commentPop.classList.toggle("show");
  // };

  render() {
    const { classes } = this.props;
    var likes = fakeData.likes;
    //console.log(" markers will mount " + DraftComment);
    //const {owner_name} = this.state.owner_name;
    return (
      <div>
        <div className = "Header">
          <Link to= {"/"}> 
            <i style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>                  
          </Link>
          <span id= "Title" style={{paddingLeft: '31%'}}><b>Post</b></span>
        </div>
        <Card className={classes.card}>
          <div className= "header">            
              <Avatar component={Link} to={"/profile/:id" + fakeData.owner_id} aria-label="avatar" className={classes.avatar} 
              style ={{ 
                        width: '30px',
                        height: '30px',
                        marginLeft: '3%',
                        textDecoration: 'none'}}>
                {fakeData.owner_name.slice(0,1)}
              </Avatar>    
              <span style={{paddingLeft: '3%', marginTop: '4%', lineHeight: 0, fontSize: '0.75rem',color: 'black'}}>{fakeData.photo_title}</span> 
          </div> 
          <Link to= {"/post/:id/image"}>            
            <CardMedia
              className={classes.media}
              image={fakeData.photo_file_url}
              src = "picture"
            />
          </Link>
          <CardActions className={classes.actions} disableActionSpacing ={true}>
            <IconButton onClick = {this.likeClick}
                        className= {classNames(
                          {[classes.unliked]: this.state.like === false},  
                          {[classes.liked]: this.state.like === true,})} 
                        aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <svg style={{width:'40px', height:'30px', paddingTop: '11%'}}>
                  <path fill="#000000" d="M21,11L14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11Z" />
              </svg>
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <svg style={{width:'40px', height:'30px'}}>
                  <path fill="#000000" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7C5,5.89 5.9,5 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.9 12.75,23 12.5,23V23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" />
              </svg>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent style = {{padding: 0}}>
              <Typography>
                <ul id="commentPanel">
                  {this.state.postReview.map(review => (
                  <span style = {{fontSize: '0.8rem',color: '#41a3f4'}}> 
                      {review.user_id}
                    <span style = {{fontSize: '0.8rem',color: '#bac1bc'}}> 
                     : {review.user_comment}<br/>  
                    </span>
                  </span>          
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Collapse>
          <Divider/>
          <CardContent className = {classes.content}>
            <center>
              <Typography component="p" id = "details">
                <span id = "text"><b>{fakeData.detail}</b></span>                 
              </Typography> 
            </center>
          </CardContent>
          <div id = 'likedPeople'>
              <FavoriteIcon className = {classes.likedPeople}/>
              <span style ={{fontSize: '0.75rem',color: '#41a3f4'}}> <b>{this.state.likes} likes</b></span>
          </div>
          <div className ="comments">
           <ul id="commentPanel">
            {this.state.postReview.map(review => (
            <span style = {{fontSize: '0.8rem',color: '#41a3f4'}}> 
                {review.user_id}
              <span style = {{fontSize: '0.8rem',color: '#bac1bc'}}> 
               : {review.user_comment}<br/>  
              </span>
            </span>          
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
              // <span style = {{fontSize: '0.6rem',color: '#41a3f4'}}><b>View all comment</b></span>
