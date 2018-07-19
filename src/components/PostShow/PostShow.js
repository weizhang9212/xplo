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
    padding: 0,
    margin: 0,
  },
  content: {
    padding: 0,
  },
  card: {
    width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
    //height: '90vh'
  },
  media: {
    paddingTop: '110%', // 16:9
    width: '100%',
    marginLeft: '0',
    borderRadius: 10,
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  },
  actions: {
    display: 'flex',
    paddingTop: '4%',
    paddingBottom: '4%',
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
  liked: {
    color: red[500],
    width: '10%',
  },
  unliked: {
    width: '10%',
  },
  likedPeople: {
    color: '#41a3f4',
    width: '5%',
    height: '5%',
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
        <Card className={classes.card}>
          <CardHeader className={classes.header}
            avatar={
              <Avatar component={Link} to={"/profile/:id" + fakeData.owner_id} aria-label="avatar" className={classes.avatar} 
              style ={{ width: '30px',
                        height: '30px',
                        marginRight: 0,
                        textDecoration: 'none'}}>
                {fakeData.owner_name.slice(0,1)}
              </Avatar>
            }
            action={
              <IconButton component={Link} to="/">
              
                <HomeIcon className={classes.iconHover}style={{ fontSize: 30, paddingTop: 10, paddingRight: 10 }}/> 
              </IconButton>             
            }
            title={<span style={{lineHeight: 0, fontSize: '0.75rem',color: '#41c4f4'}}>{fakeData.photo_title}</span>}
            subheader={<span style={{lineHeight: 0, fontSize: '0.75rem'}}>{fakeData.upload_date}</span>}
          />
          <a href= {fakeData.photo_file_url}>
          <CardMedia
            className={classes.media}
            image={fakeData.photo_file_url}
            src = "picture"
          />
          </a>
          <CardActions className={classes.actions} disableActionSpacing ={true}>
            <IconButton onClick = {this.likeClick}
                        className= {classNames(
                          {[classes.unliked]: this.state.like === false},  
                          {[classes.liked]: this.state.like === true,})} 
                        aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <span style = {{fontSize: '0.6rem',color: '#41a3f4'}}>View all comment</span>
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
              <span style ={{fontSize: '0.75rem',color: '#41a3f4'}}><b>{this.state.likes} likes</b></span>
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
