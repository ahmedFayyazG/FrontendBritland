// import React, { Component } from "react";
// import MaterialTable from "material-table";

// const Table = ({ stuff }) => {
//   const data = { stuff };

//   const columns = [
//     { title: "Name", field: "name" },
//     { title: "Address", field: "address" },
//     { title: "Phone Number", field: "phoneNumber" },
//     { title: "Type Of Property", field: "property" },
//   ];
//   return (
//     <div>
//       <MaterialTable
//         title="Landlords"
//         data={data}
//         columns={columns}
//         options={{
//           search: false,
//           filtering: true,
//           paging: false,
//           exportButton: true,
//           actionsColumnIndex: -1,
//         }}
//         actions={[
//           {
//             icon: "delete",
//             tooltip: "Delete",
//             onClick: (event, rowData) => alert("You saved " + rowData.name),
//           },
//           {
//             icon: "edit",
//             tooltip: "Edit",
//             onClick: (event, rowData) =>
//               // confirm("You want to delete " + rowData.name),
//               console.log("DELETED"),
//           },
//         ]}
//       />
//       {/* {data.map((d, i) => {
//         return <h2 key={i}> {d.name} </h2>;
//       })} */}
//     </div>
//   );
// };

// export default Table;
