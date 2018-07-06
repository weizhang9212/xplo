import React, { Component } from 'react';
import BotBar from '../../components/BotBar/BotBar'
import TopBar from '../../components/TopBar/TopBar'
import { Divider } from 'material-ui';
import MapContainer from '../MapContainer/MapContainer'

class PageWrapper extends Component{
        render(){
            return(
                <div>
                    <TopBar/>
                    <MapContainer>
                    </MapContainer>
                    <BotBar/>
                </div>
            )
        }
}

export default PageWrapper;