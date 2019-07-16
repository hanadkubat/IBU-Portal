import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

const columns = ["Naslov", "Sadrzaj", "Izmijeni", "Obrisi"];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
];

const options = {
  filterType: "checkbox",
  responsive: 'scroll'
};

export default function AdminNews() {
  return (
    <div>
      <MUIDataTable
        title={"Novosti"}
        data={data.map(item => {
          return [
            item.name,
            item.company,
            <Button variant="contained" color="primary" key={item}>Izmijeni</Button>,
            <Button variant="contained" color="secondary" key={item}>Obrisi</Button>
          ];
        })}
        columns={columns}
        options={options}
      />
    </div>
  );
}
