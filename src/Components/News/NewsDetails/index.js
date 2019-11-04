import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

import moment from 'moment';
import {newsApi, staticFiles} from '../../../api';

const Styles = theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: '360px'
    
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  }
})

class NewsDetails extends React.Component {
  state = {
    title: "",
    content: "",
    date: "",
    userName: "",
    img: ""
  };

  componentWillMount() {
    newsApi.getOne(this.props.match.params.id).then(data => {
      if(data.img){
        staticFiles.getImage(data.img.filename)
        .then(imageData => {
          this.setState({ ...data, img: URL.createObjectURL(imageData) });
        })
        .catch(err => {
          console.log(err);
          this.setState({ ...data, img: 'https://loremflickr.com/640/360' });
        });
      } else {
        this.setState({ ...data, img: 'https://loremflickr.com/640/360' });
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Paper
              className={classes.mainFeaturedPost}
              style={{ backgroundImage: `url(${this.state.img})` }}
            >
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom
                    >
                      {this.state.title}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {this.state.userName}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={12}>
                <Paper className="p-3">
                  <Typography variant="h6" gutterBottom color="textSecondary" className="my-2 px-4" >
                    {moment(this.state.date).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>
                  <Divider />         
                  <Typography variant="h6" style={{wordWrap: 'break-word'}} gutterBottom className="my-2 px-4">
                    {this.state.content}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(Styles)(NewsDetails);
