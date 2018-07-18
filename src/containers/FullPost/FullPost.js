import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import PostShow from '../../components/PostShow/PostShow'

export default class FullPost extends Component{
    render(){
        console.log(this.props);

        return (
            <div>
            	<PostShow>
                </PostShow>
            </div>
        );
    }
}