import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { Link } from "react-router-dom";
import {authContext} from '../../config/adalConfig';

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Suggestions" />
      </ListItem>
    </Link>
    <Link to="/dashboard/news" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItem>
    </Link>
      <ListItem button onClick={() => authContext.logOut()}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Administration</ListSubheader>

    <Link to="/dashboard/admin/suggestions" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="User Suggestions" />
      </ListItem>
    </Link>

    <Link to="/dashboard/admin/comments" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="User Comments" />
      </ListItem>
    </Link>

    <Link to="/dashboard/admin/news" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="News Articles" />
      </ListItem>
    </Link>
  </div>
);
