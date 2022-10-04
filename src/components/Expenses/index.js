import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import AddExpenses from "./AddExpenses";

const Expenses = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { expensesList } = useSelector((state) => state.income);

  console.log("expensesList", expensesList);

  const showModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="mt-16">
        <div className="flex items-center justify-between sm:max-w-screen-lg w-full mb-4">
          <div
            onClick={() => setShow(!show)}
            className="flex items-center cursor-pointer"
          >
            {show ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
            <h1 className="font-bold ring-indigo-800 ">Expenses </h1>
          </div>
          <div className="flex space-x-2 justify-center">
            <button
              onClick={showModal}
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add
            </button>
          </div>
        </div>
        {show && (
          <div className="flex flex-col md:ml-8 sm:max-w-screen-lg w-full	">
            <div className="overflow-x-auto">
              <div className=" min-w-full sm:px-6 lg:px-2">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th className="text-sm text-end text-gray-900 ">Name</th>
                      <th
                        scope="col"
                        className="text-sm text-end text-gray-900 "
                      >
                        Budget
                      </th>
                      <th
                        scope="col"
                        className=" py-2 text-sm text-end text-gray-900 "
                      >
                        Amount
                      </th>

                      <th
                        scope="col"
                        className="text-sm text-end text-gray-900 "
                      >
                        Month
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-center text-gray-900 "
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-end text-gray-900 "
                      >
                        In Budget
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-end text-gray-900 "
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {expensesList.length > 0 &&
                      expensesList.map((item, index) => (
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-xs text-gray-800  text-end py-2">
                            {item.name}
                          </td>
                          <td className="text-xs text-gray-900  text-end py-1 ">
                            ₹{item.budget}
                          </td>
                          <td className="text-xs text-blue-500  text-end py-1 ">
                            -₹{item.amount}
                          </td>

                          <td className="text-xs text-gray-900  text-end py-1 ">
                            {item.month}
                          </td>
                          <td className="text-xs  text-gray-900  text-end py-1 ">
                            <span>
                              {item.type == 0 ? (
                                <div className="px-[0.97rem] py-1 bg-purple-200 text-purple-800 inline-block rounded">
                                  Flexible Expense
                                </div>
                              ) : (
                                <div className="px-[1.3rem] py-1 bg-indigo-200 text-indigo-800 inline-block rounded">
                                  Fixed Expense
                                </div>
                              )}
                            </span>
                          </td>
                          <td className="text-xs text-gray-900  text-end py-1 ">
                            ok
                          </td>
                          <td className="text-xs text-gray-900  text-end py-1 ">
                            {item.date}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <AddExpenses open={open} setOpen={setOpen} />
    </div>
  );
};

export default Expenses;
