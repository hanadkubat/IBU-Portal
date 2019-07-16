import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

const columns = ["Ime", "Naslov", "Sadrzaj", "Prihvati", "Odbiji"];

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

export default function AdminSuggestions() {
  return (
    <div>
      <MUIDataTable
        title={"Korisnicki prijedlozi"}
        data={data.map(item => {
          return [
            item.name,
            item.company,
            item.city,
            <Button variant="contained" color="primary" key={item}>Odobri</Button>,
            <Button variant="contained" color="secondary" key={item}>Zabrani</Button>
          ];
        })}
        columns={columns}
        options={options}
      />
    </div>
  );
}
