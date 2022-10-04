import React, { useState } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from 'react-icons/md';
import { Button, Modal } from 'antd';
import AddIncome from './AddIncome';

const Income = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className='mt-16'>
        <div className='flex items-center justify-between sm:max-w-screen-lg w-full mb-4'>
          <div
            onClick={() => setShow(!show)}
            className='flex items-center cursor-pointer'
          >
            {show ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
            <h1 className='font-bold ring-indigo-800 '>Income </h1>
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
        {show && (
          <div className='flex flex-col md:ml-8 sm:max-w-screen-lg w-full'>
            <div className='overflow-x-auto'>
              <div className=' min-w-full sm:px-6 lg:px-2'>
                <table className='min-w-full'>
                  <thead className='bg-white border-b'>
                    <tr>
                      <th>Name</th>
                      <th
                        scope='col'
                        className=' py-2 text-sm text-center text-gray-900 '
                      >
                        Ammount
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
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                      <td className='text-xs text-gray-800  text-center py-2'>
                        Salary
                      </td>
                      <td className='text-xs text-blue-500  text-center py-1 '>
                        ₹14,000.00
                      </td>
                      <td className='text-xs text-gray-900  text-center py-1 '>
                        <div
                          className=' rounded py-1 px-4 inline-block bg-blue-100 text-blue-700'
                          role='alert'
                        >
                          Fixed Income
                        </div>
                      </td>
                      <td className='text-xs text-gray-900  text-center py-1 '>
                        Septembae 1,2021
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <AddIncome open={open} setOpen={setOpen} />
    </div>
  );
};

export default Income;
