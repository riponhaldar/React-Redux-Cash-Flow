import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import AddExpenses from './AddExpenses';
import { toggleEpenses } from '../../Redux/reducer/AddCashSlice';
const Expenses = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const { expensesList, expensesShow } = useSelector((state) => state.income);

  const showModal = () => {
    setOpen(true);
  };
  const handalShow = () => {
    dispatch(toggleEpenses(!expensesShow));
  };
  return (
    <div>
      <div className='mt-16'>
        <div className='flex items-center justify-between sm:max-w-screen-lg w-full mb-4'>
          <div onClick={handalShow} className='flex  cursor-pointer'>
            {expensesShow ? (
              <MdOutlineArrowDropDown className='text-xl' />
            ) : (
              <MdOutlineArrowRight className='text-xl' />
            )}
            <h1 className='font-bold ring-indigo-800 '>Expenses </h1>
          </div>
          <div className='flex space-x-2 justify-center'>
            <button
              onClick={showModal}
              type='button'
              className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Add
            </button>
          </div>
        </div>
        {expensesShow && (
          <div className='flex flex-col md:ml-8 sm:max-w-screen-lg w-full	'>
            <div className='overflow-x-auto'>
              <div className=' min-w-full sm:px-6 lg:px-2'>
                <table className='min-w-full'>
                  <thead className='bg-white border-b'>
                    <tr>
                      <th className='text-sm text-end text-gray-900 '>Name</th>
                      <th
                        scope='col'
                        className='text-sm text-end text-gray-900 '
                      >
                        Budget
                      </th>
                      <th
                        scope='col'
                        className=' py-2 text-sm text-end text-gray-900 '
                      >
                        Amount
                      </th>

                      <th
                        scope='col'
                        className='text-sm text-end text-gray-900 '
                      >
                        Month
                      </th>
                      <th
                        scope='col'
                        className='text-sm text-center text-gray-900 '
                      >
                        Type
                      </th>
                      <th
                        scope='col'
                        className='text-sm text-center text-gray-900 '
                      >
                        In Budget
                      </th>
                      <th
                        scope='col'
                        className='text-sm text-end text-gray-900 '
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {expensesList.length > 0 &&
                      expensesList.map((item, index) => (
                        <tr
                          key={index}
                          className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'
                        >
                          <td className='text-xs text-gray-800  capitalize text-end py-2'>
                            {item.name}
                          </td>
                          <td className='text-xs text-blue-900  text-end py-1 '>
                            ₹{item.budget}
                          </td>
                          <td className='text-xs text-blue-600  text-end py-1 '>
                            -₹{item.amount}
                          </td>

                          <td className='text-xs text-gray-900  text-end py-1 '>
                            {item.month}
                          </td>
                          <td className='text-xs  text-gray-900  text-center py-1 '>
                            <span>
                              {item.type == 0 ? (
                                <div className='px-[0.97rem] py-1 bg-purple-200 text-purple-800 inline-block rounded'>
                                  Flexible Expense
                                </div>
                              ) : (
                                <div className='px-[1.3rem] py-1 bg-indigo-200 text-indigo-800 inline-block rounded'>
                                  Fixed Expense
                                </div>
                              )}
                            </span>
                          </td>
                          <td className='text-xs text-gray-900  text-center py-1 '>
                            {item.inOverBudget.toLowerCase() === 'not' ? (
                              <div className='bg-red-50 text-red-600 px-6 py-1 inline-block rounded'>
                                Extra Over Budget
                              </div>
                            ) : item.inOverBudget == 'In Budget' ? (
                              <div className='px-[2.8rem] py-1 bg-green-100 text-green-800 inline-block rounded'>
                                In Budget
                              </div>
                            ) : (
                              <div className='px-[2.4rem] py-1 bg-red-200 text-red-600 inline-block rounded'>
                                Over Budget
                              </div>
                            )}
                          </td>
                          <td className='text-xs text-gray-900  text-end py-1 '>
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
