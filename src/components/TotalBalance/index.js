import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
const TotalBalance = () => {
  //  const [data,setData] = useState([])

  const [show, setShow] = useState(true);
  const { incomeItems } = useSelector((state) => state.income);
  const { expensesList } = useSelector((state) => state.income);

  const data = expensesList.map((el, o) => {
    const els = incomeItems.find((item, p) => o === p);
    return { income: els?.amount, expenses: el.amount };
  });

  console.log("data", data);
  useEffect(() => {}, []);

  return (
    <div className="mt-12">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center cursor-pointer"
      >
        {show ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
        <h1 className="font-bold ring-indigo-800 ">Total Balance </h1>
      </div>
      {show && (
        <div className=" md:ml-8 sm:max-w-screen-lg w-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <div className=" min-w-full sm:px-6 lg:px-2 table_height">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className=" py-2 text-sm text-center text-gray-900 "
                      >
                        Total Income
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-center text-gray-900 "
                      >
                        Total Expenses
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-center text-gray-900 "
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="py-2 text-sm font-bold  text-gray-900">
                        Total Balance
                      </td>
                      <td className="text-xs text-gray-900  text-center py-1 ">
                        {Number(incomeItems.reduce((e, i) => e + i.amount, 0))}
                      </td>
                      <td className="text-xs text-red-600  text-center py-1 ">
                        - {expensesList.reduce((e, i) => e + i.amount, 0)}
                      </td>
                      <td className="text-xs text-gray-800  text-center py-1 ">
                        {parseFloat(
                          Number(
                            incomeItems.reduce((e, i) => e + i.amount, 0)
                          ) -
                            Number(
                              expensesList.reduce((e, i) => e + i.amount, 0)
                            )
                        ).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" h-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* <XAxis dataKey="name" /> */}
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="green"

                    activeDot={{ r: 8 }}
                    strokeDasharray="5 5"
                  />
                  {/* <Line type="monotone" dataKey="expenses" stroke="red" /> */}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalBalance;
