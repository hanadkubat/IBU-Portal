import React from "react";
import {
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import moment from "moment";
import { withRouter } from "react-router-dom";
import styles from "./News.module.css";
import { staticFiles } from "../../api";

const Styles = theme => ({
  card: {
    maxWidth: "100%",
    cursor: "pointer"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class NewsCard extends React.Component {
  state = {
    imageUrl: null
  };

  componentWillMount() {
    if(this.props.img){
      staticFiles.getImage(this.props.img.filename).then(data => {
        this.setState({ imageUrl: URL.createObjectURL(data) });
      })
    }  else {
      this.setState({ imageUrl: 'https://loremflickr.com/640/360'});
    } 
  }

  render() {
    const { classes } = this.props;
    return (
      <Card
        className={[classes.card, styles.wrapper].join(" ")}
        onClick={() =>
          this.props.history.push(`/dashboard/news/article/${this.props.id}`)
        }
      >
        <CardHeader
          avatar={
            <Avatar aria-label="User" className={classes.avatar}>
              {this.props.user[0].toUpperCase()}
            </Avatar>
          }
          title={this.props.user}
          subheader={moment(this.props.date).format("MMMM Do, YYYY")}
        />
        <CardMedia
          className={classes.media}
          image={this.state.imageUrl}
          title="Article image"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="w-100"
          >
            {this.props.title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(withStyles(Styles)(NewsCard));
