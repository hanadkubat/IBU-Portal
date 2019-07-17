import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";

import { Switch, Route } from "react-router-dom";

//adal api
import { adalApiFetch } from "../../adalConfig";

//custom components
import News from "../../Components/News";
import Suggestions from "../../Components/Suggestions";
import SuggestionDetails from "../../Components/Suggestions/SuggestionDetails";
import NotFound from "../../Components/NotFound";

//custom admin components
import AdminSuggestions from "../../Components/Admin/AdminSuggestions";
import AdminComments from "../../Components/Admin/AdminComments";
import AdminNews from "../../Components/Admin/AdminNews";

//logo
import logo from "../../assets/mibo.png";
const logoStyle = {
  maxWidth: "128px",
  maxHeight: "40px"
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  /*const headers = new Headers();
    const bearer = "Bearer " + localStorage.getItem('adal.idtoken');
    headers.append("Authorization", bearer);*/
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
    }
  };
  adalApiFetch(fetch, "https://graph.windows.net/hanadkubathotmail.onmicrosoft.com/users/fe1b24e9-c708-4dd0-9367-0986f20b7816/getMemberObjects?api-version=1.6", options)
    .then(res => res.json())
    .then(data => console.log(data));

  //kenan@hanadkubathotmail.onmicrosoft.com
  //Gobo3786
  //console.log(localStorage.getItem('adal.idtoken'))
  //https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-supported-queries-filters-and-paging-options#CommonQueries
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <img src={logo} alt="mibo" style={logoStyle} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/dashboard" component={Suggestions} />
            <Route
              exact
              path="/dashboard/suggestion/:id"
              component={SuggestionDetails}
            />
            <Route path="/dashboard/news" component={News} />
            <Route
              path="/dashboard/admin/suggestions"
              component={AdminSuggestions}
            />
            <Route path="/dashboard/admin/comments" component={AdminComments} />
            <Route path="/dashboard/admin/news" component={AdminNews} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}
