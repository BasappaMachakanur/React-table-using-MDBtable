import React, { useContext } from "react";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Datacontext } from "../Api/ContextApi";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTableEditable
} from "mdbreact";
const App = () => {
  let userdata=useContext(Datacontext)
  console.log(userdata)
  const data = {
    columns: [
      {
        label: "Name",
        field: "author",
        sort: "asc",
        width: 150
      },
      {
        label: "like",
        field: "like",
        sort: "asc",
        width: 270
      },
      {
        label: "reply",
        field: "reply",
        sort: "asc",
        width: 200
      },
      {
        label: "Text",
        field: "text",
        sort: "asc",
        width: 100
      },
      {
        label: "Date",
        field: "at",
        sort: "asc",
        width: 150
      },
      
    ],
    rows:userdata
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default App;
