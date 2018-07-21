import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import PostShow from '../../components/PostShow/PostShow'
import { connect } from 'react-redux'


class FullPost extends Component{
    componentWillMount(){
       this.props.switch(10);
    }
    render(){
        return (
            <div>
            	<PostShow>
                </PostShow>
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
  export default connect(mapStateToProps, mapDispatchToProps)(FullPost);