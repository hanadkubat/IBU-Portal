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

//custom components
import News from "../../Components/News";
import NewsDetails from "../../Components/News/NewsDetails";
import Suggestions from "../../Components/Suggestions";
import SuggestionDetails from "../../Components/Suggestions/SuggestionDetails";
import Statistics from "../../Components/Statistics";
import NotFound from "../../Components/NotFound";

//custom admin components
import AdminSuggestions from "../../Components/Admin/AdminSuggestions";
import AdminComments from "../../Components/Admin/AdminComments";
import AdminNews from "../../Components/Admin/AdminNews";

//logo
import logo from "../../assets/IBU_logo.png";
import bgImage from "../../assets/about_burch1.jpg";

import { checkIfPowerUser } from "../../config/adalConfig";

const logoStyle = {
  maxWidth: "128px",
  maxHeight: "40px"
};


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundImage: `url("${bgImage}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
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
    overflow: "auto",
    backdropFilter: 'blur(10px)'
    
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
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

  const isPowerUser = checkIfPowerUser(localStorage.getItem('adal.idtoken'));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="primary"
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
            <img src={logo} alt="burch" style={logoStyle} />
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
        <List>{isPowerUser && secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/dashboard" component={Suggestions} />
            <Route exact path="/dashboard/active" component={Suggestions} />
            <Route exact path="/dashboard/closed" component={Suggestions} />
            <Route exact path="/dashboard/news" component={News} />
            <Route exact path="/dashboard/suggestion/:id" component={SuggestionDetails} />
            <Route exact path="/dashboard/news/article/:id" component={NewsDetails} />
            <Route path="/dashboard/admin/suggestions" component={AdminSuggestions} />
            <Route path="/dashboard/admin/comments" component={AdminComments} />
            <Route path="/dashboard/admin/news" component={AdminNews} />
            <Route path="/dashboard/admin/statistics" component={Statistics} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}
