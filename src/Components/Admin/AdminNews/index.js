import React from "react";
import MUIDataTable from "mui-datatables";
import { Button, Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import AddNewsModal from "./AddNewsModal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAllNews, addNews, deleteNews } from "../../../actions/news.actions";

const columns = ["Naslov", "Sadrzaj", "Izmijeni", "Obrisi"];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" }
];

const options = {
  filterType: "checkbox",
  responsive: "scroll"
};

class AdminNews extends React.Component {
  state = {
    modalOpen: false
  };

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
              data={data.map(item => {
                return [
                  item.name,
                  item.company,
                  <Button variant="contained" color="primary" key={item}>
                    Izmijeni
                  </Button>,
                  <Button variant="contained" color="secondary" key={item}>
                    Obrisi
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
