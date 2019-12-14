import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InsertChartIcon from '@material-ui/icons/InsertChart';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';

import { Link } from "react-router-dom";
import {authContext} from '../../config/adalConfig';

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

export const mainListItems = (
  <div>
    <Link to="/dashboard/active" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <PresentToAllIcon />
        </ListItemIcon>
        <ListItemText primary="Active Suggestions" />
      </ListItem>
    </Link>
    <Link to="/dashboard/closed" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <CancelPresentationIcon />
        </ListItemIcon>
        <ListItemText primary="Closed Suggestions" />
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
    <Link to="/dashboard/admin/statistics" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
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
