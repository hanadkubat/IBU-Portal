import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import AddNewsModal from "./AddNewsModal";

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

export default function AdminNews() {
  const [modalOpen, setModalOpen] = useState(false);

  //modal handlers
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <AddNewsModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        isOpen={modalOpen}
      />
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} lg={2}>
          <Fab color="secondary" aria-label="Add" onClick={handleOpen}>
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
