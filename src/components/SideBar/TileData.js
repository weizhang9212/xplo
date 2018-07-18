import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FriendIcon from '@material-ui/icons/PeopleOutline'
import SearchIcon from '@material-ui/icons/Search'
import XploIcon from '@material-ui/icons/AllInclusive'

import MyPicIcon from '@material-ui/icons/MonochromePhotos'
import SettingIcon from '@material-ui/icons/Settings'
import Logout from '@material-ui/icons/PowerSettingsNew'

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FriendIcon></FriendIcon>
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteIcon></FavoriteIcon>
      </ListItemIcon>
      <ListItemText primary="My Favorite" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon></SearchIcon>
      </ListItemIcon>
      <ListItemText primary="Search Nearby" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <XploIcon></XploIcon>
      </ListItemIcon>
      <ListItemText primary="Xplo Jump" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MyPicIcon></MyPicIcon>
      </ListItemIcon>
      <ListItemText primary="Pictures" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingIcon></SettingIcon>
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Logout></Logout>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);