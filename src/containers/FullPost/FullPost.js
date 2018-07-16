import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';
import PostShow from '../../components/PostShow/PostShow'
export default class FullPost extends Component{
    render(){
        console.log(this.props);

        return (
            <div>
            	<PostShow>
                <Link to ="/">This is a Post Page</Link>
                </PostShow>
            </div>
        );
    }
}