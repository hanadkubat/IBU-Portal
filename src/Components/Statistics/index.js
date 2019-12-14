import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllSuggestions } from "../../actions/suggestion.actions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Doughnut, Line } from 'react-chartjs-2';
import { green, red } from "@material-ui/core/colors"

class Statistics extends Component {
  componentWillMount() {
    this.props.getAllSuggestions();
  }

  groupSuggestionByDate = (suggestions) => {
    let res = {};
    
    let fn = (year, month, o = res, array = suggestions) => {
      o[year][month] =  array.filter(({date: d}) => `${year}-${month}` === d.slice(0, 7)).length;
    }
    
    for (let {date} of suggestions) {
      let [year, month] = date.match(/\d+/g);
      if (!res[year]) res[year] = {};
      fn(year, month)
    }
    
    return res;
  }

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    
    const activeSugg = this.props.suggestions.filter(s => s.active).length;
    const closedSugg = this.props.suggestions.length - activeSugg;
    const suggByDate = this.groupSuggestionByDate(this.props.suggestions);

    console.log(suggByDate)
    console.log(this.props.suggestions)
    console.log(suggByDate['2019'] && Object.keys(suggByDate['2019']).map(month => suggByDate['2019'][month]))

    return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Paper className='py-3'>
          <Doughnut
              data={{
                  datasets: [{
                      data: [
                        activeSugg, 
                        closedSugg
                      ],
                      backgroundColor: [
                        green[500],
                        red[500],
                      ],
                      borderWidth: '3px',
                  }],
                  // These labels appear in the legend and in the tooltips when hovering different arcs
                  labels: [
                      'Active Suggestions',
                      'Closed Suggestions',
                  ]
              }}
              options={{
                legend: {
                  labels: {
                    fontColor: 'black',
                    fontSize: 18
                  }
                }
              }}
          />
          <Typography className='mt-2' variant="h6" gutterBottom align='center'>
            Pie chart representing the total of active and closed suggestions
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className='py-3'>
          <Line 
            data={{
              datasets: Object.keys(suggByDate).map(year => {
                const months = [1,2,3,4,5,6,7,8,9,10,11,12];
                return {
                  label: year,
                  data: months.map(month => suggByDate[year][month] || 0),
                  borderColor: this.getRandomColor()
                }
              }),
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
                ]
            }}
          />
          <Typography className='mt-2' variant="h6" gutterBottom align='center'>
            Bar chart representing total suggestions created by month
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    );
  }
}

const mapState = state => ({
  suggestions: state.suggestions.suggestions,
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      getAllSuggestions,
    },
    dispatch
  );

export default connect(mapState, mapActions)(Statistics);
