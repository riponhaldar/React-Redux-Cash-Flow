import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';

import { MdOutlineArrowRight, MdOutlineArrowDropDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
const TotalBalance = () => {
  const [show, setShow] = useState(true);

  const { incomeItems } = useSelector((state) => state.income);
  console.log('IncomeItems', incomeItems);

  return (
    <div className='mt-12'>
      <div
        onClick={() => setShow(!show)}
        className='flex items-center cursor-pointer'
      >
        {show ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
        <h1 className='font-bold ring-indigo-800 '>Total Balence </h1>
      </div>
      {show && (
        <div className='flex flex-col md:ml-8 sm:max-w-screen-md w-full'>
          <div className='overflow-x-auto'>
            <div className=' min-w-full sm:px-6 lg:px-2'>
              <table className='min-w-full'>
                <thead className='bg-white border-b'>
                  <tr>
                    <th></th>
                    <th
                      scope='col'
                      className=' py-2 text-sm text-center text-gray-900 '
                    >
                      Total Income
                    </th>
                    <th
                      scope='col'
                      className='text-sm text-center text-gray-900 '
                    >
                      Total Expenses
                    </th>
                    <th
                      scope='col'
                      className='text-sm text-center text-gray-900 '
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td className='py-2 text-sm font-bold  text-gray-900'>
                      Total Balance
                    </td>
                    <td className='text-xs text-gray-900  text-center py-1 '>
                      {incomeItems.reduce((e, i) => e + i.amount, 0)}
                    </td>
                    <td className='text-xs text-red-600  text-center py-1 '>
                      - ₹2,000.00
                    </td>
                    <td className='text-xs text-gray-800  text-center py-1 '>
                      0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalBalance;
