import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';
export default class News extends Component {
    render() {
        return (
            <Grid container spacing={3}>

                <Grid item xs={12} md={6} >
                    <Grid container justify="center">
                        <NewsCard />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Grid container justify="center">
                        <NewsCard />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Grid container justify="center">
                        <NewsCard />
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}
