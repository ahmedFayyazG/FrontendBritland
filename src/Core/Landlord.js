import React, { Component, Fragment, useEffect, useState } from "react";
import Menu from "./menu";

import styled from "styled-components";
import Button from "./../Css_Files/Button";
import {
  DeleteLandlord,
  EditLandlord,
  GetLandlords,
} from "../Landlords/apiLandlords";
import MaterialTable from "material-table";
import { Link, useNavigate } from "react-router-dom";

const Landlord = () => {
  const [tableitems, setData] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  const { name, address, phoneNumber, property } = tableitems;
  const navigate = useNavigate();
  const getLunds = () => {
    GetLandlords()
      .then((resp) => {
        if (resp.error) {
          console.log("ERRORs in Lunds");
        } else {
          // console.log(JSON.stringify(resp.landlords));
          setData(resp.landlords);
        }
      })
      .catch((err) => {
        return console.error(err);
      });
    console.log("Data in State" + tableitems);
  };

  const getLundsPrint = () => {
    console.log("Data in State" + JSON.stringify(tableitems));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getLunds();
  }, []);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "Phone Number", field: "phoneNumber" },
    { title: "Type Of Property", field: "property" },
  ];

  return (
    <div>
      <Menu />
      <h2 style={{ margin: "10px", textAlign: "center" }}> LandLords </h2>
      <NavLinks to="/addlandlord">Add Record</NavLinks>
      {/* {tableitems.map((t, i) => {
        return <h5 key={i}> {t.name} </h5>;
      })} */}
      <TableStyle>
        <MaterialTable
          title="Landlords"
          data={tableitems}
          columns={columns}
          options={{
            search: false,
            filtering: true,
            paging: false,
            exportButton: true,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: "delete",
              tooltip: "Delete",
              onClick: (event, rowData) => {
                alert("Deleted Succesfully " + rowData.name);
                DeleteLandlord(rowData._id);
                window.location.reload(false);
              },
            },
            {
              icon: "edit",
              tooltip: "Edit",
              onClick: (event, rowData) =>
                // confirm("You want to delete " + rowData.name),
                // console.log("RWO DATA" + JSON.stringify(rowData)),

                navigate(`/editlandlord/${rowData._id}`, {
                  state: JSON.stringify(rowData),
                }),
            },
          ]}
        />
      </TableStyle>
      ;
    </div>
  );
};

export default Landlord;

const HeadingText = styled.div`
  font-size: 20px;
`;

const TableStyle = styled.div`
  margin: auto;
  width: 70%;
  padding: 10px;
`;

const ButtonStyle = styled.div`
  margin: 20px, 0px, 10px, 200px;
`;

const NavLinks = styled(Link)`
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  padding: 0 24px;
  border-radius: 50px;
  min-width: 100px;
  height: 40px;
  font-size: 18px;
  background-color: #fd0;
  font-weight: 500;
  color: #222;
  min-width: 90px;
  margin-left: 100px;
  margin-bottom: 10px;
  textdecoration: "none";
  onhover: "none";
  focus,
  hover,
  visited,
  link,
  active {
    textdecoration: none;
  }
`;
