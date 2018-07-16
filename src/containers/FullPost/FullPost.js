import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';

export default class FullPost extends Component{
    render(){
        console.log(this.props);

        return (
            <div>
                <Link to ="/">This is a Post Page</Link>
            </div>
        );
    }
}