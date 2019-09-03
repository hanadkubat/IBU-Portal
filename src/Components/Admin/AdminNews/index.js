import React from "react";
import MUIDataTable from "mui-datatables";
import { Button, Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import AddNewsModal from "./AddNewsModal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAllNews, addNews, deleteNews } from "../../../actions/news.actions";

const columns = ["User", "Title", "Date", "Delete"];
const options = {
  filterType: "checkbox",
  responsive: "scroll"
};

class AdminNews extends React.Component {
  state = {
    modalOpen: false
  };

  componentWillMount(){
    this.props.getAllNews();
  }

  //modal handlers
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <AddNewsModal
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.modalOpen}
          addNews={this.props.addNews}
        />
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} lg={2}>
            <Fab color="secondary" aria-label="Add" onClick={this.handleOpen}>
              <AddIcon />
            </Fab>
          </Grid>

          <Grid item xs={12} lg={10}>
            <MUIDataTable
              title={"Novosti"}
              data={this.props.news.map(item => {
                return [
                  item.userName,
                  item.title,
                  item.date,
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.props.deleteNews(item._id)}
                    key={item._id}
                  >
                    Delete
                  </Button>
                ];
              })}
              columns={columns}
              options={options}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapState = state => ({
  news: state.news.news
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      addNews,
      getAllNews,
      deleteNews
    },
    dispatch
  );

export default connect(
  mapState,
  mapActions
)(AdminNews);
