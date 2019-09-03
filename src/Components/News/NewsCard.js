import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import moment from 'moment';
import styles from './News.module.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={ [classes.card, styles.wrapper].join(' ')} >
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {props.user[0].toUpperCase()}
          </Avatar>
        }
        title={props.user}
        subheader={moment(props.date).format('MMMM Do, YYYY')}
      />
      <CardMedia
        className={classes.media}
        image="https://storage.bljesak.info/image/267892/1280x880/zenica.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className="w-100">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
