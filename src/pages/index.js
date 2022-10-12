import React from "react";
import CashFlow from "./CashFlow";

const Home = () => {
  const data = [
    { name: "Ripon ", lastName: "" },
    { name: "jack", lastName: "" },
    { name: "Mack", lastName: "" },
    { name: "deep", lastName: null },


  ];
  const data2 = [
    { lastName: "Haldar" },
    { lastName: "parker" },
    { lastName: "heyBox" },
    { lastName: "" },


  ];

  const tD = data.map((el, o) => {
  const els = data2.find((item, p) => o  === p);
    return { name: el.name,  lastName: els?.lastName };
  });
  // const tD = data.forEach((el ,o) => {
  //   const els = data2.find((elss,p) => o === p);
  //   // console.log('els', els)
  //   const dataaa = { name: el.name, lastName: els.lastName };
  //   console.log('dataaa', dataaa)
  // });
  console.log("tD", tD);
  return (
    <div>
      <CashFlow />
    </div>
  );
};

export default Home;
