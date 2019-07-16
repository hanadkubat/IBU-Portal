import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Comments from './Comments';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  header:{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
}));

export default function SuggestionDetails(props) {
    const classes = useStyles();

    const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} lg={8}>
                <Paper className={classes.root}>
                    <div className={classes.header} >
                        <Typography variant="h5" component="h3">
                            Naslov {props.match.params.id}
                        </Typography>
                        <Typography variant="caption" component="p">
                            {moment().format('MMMM Do YYYY, h:mm a')}
                        </Typography>
                    </div>
                    <Typography component="p" className="mt-4">
                        {content}
                    </Typography>

                    <Comments />
                    
                </Paper>
            </Grid>
        </Grid>
    )
}
