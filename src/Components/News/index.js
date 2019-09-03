import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAllNews,
} from "../../actions/news.actions";
class News extends Component {

    componentWillMount(){
        this.props.getAllNews()
    }

    render() {
        return (
          <Grid container spacing={3}>
            {this.props.news.map(n => {
              return (
                <Grid item xs={12} md={6}>
                  <Grid container justify="center">
                    <NewsCard 
                        img={n.img}
                        user={n.userName}
                        date={n.date}
                        title={n.title}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        );
    }
}

const mapState = state => ({
    news: state.news.news
  });
  const mapActions = dispatch =>
    bindActionCreators(
      {
        getAllNews,
      },
      dispatch
    );
  
  export default connect(
    mapState,
    mapActions
  )(News);
  