import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { initialValues, validationSchama } from '../models/AddExpensesModel.js';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addExpenses } from '../../Redux/reducer/AddCashSlice';

const AddExpenses = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const AddExpensesSubmit = (values, { resetForm }) => {
    setOpen(false);

    if (values.budget == '') {
      dispatch(
        addExpenses({
          ...values,
          inOverBudget: 'Not',
          amount: Number(values.amount),
          budget: Number(values.budget),
        })
      );
    } else if (values.budget < values.amount) {
      dispatch(
        addExpenses({
          ...values,
          inOverBudget: 'Over Budget',
          amount: Number(values.amount),
          budget: Number(values.budget),
        })
      );
    } else if (values.budget >= values.amount) {
      dispatch(
        addExpenses({
          ...values,
          inOverBudget: 'In Budget',
          amount: Number(values.amount),
          budget: Number(values.budget),
        })
      );
    }
    resetForm();
  };

  return (
    <>
      <Modal
        open={open}
        title='Expenses'
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchama}
          onSubmit={AddExpensesSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className=' ' onSubmit={handleSubmit}>
              <div className='grid sm:grid-cols-2 gap-3'>
                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    name <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className={`block mt-1 border w-full px-2 py-1 rounded outline-none  ${
                      touched.name && !errors.name && 'border-green-500'
                    }`}
                    type='text'
                    name='name'
                    value={values.name}
                    onBlur={handleBlur}
                    error={errors.name}
                    onChange={handleChange}
                    placeholder='name**'
                  />
                  <p className='text-red-400 text-xs'>{errors.name}</p>
                </div>

                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    amount <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className={`block mt-1 border w-full px-2 py-1 rounded outline-none  ${
                      touched.amount && !errors.amount && 'border-green-500'
                    }`}
                    type='text'
                    name='amount'
                    value={values.amount}
                    onBlur={handleBlur}
                    error={errors.amount}
                    onChange={handleChange}
                    placeholder='$***.00'
                  />
                  <p className='text-red-400 text-xs'>{errors.amount}</p>
                </div>
                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    budget <span className='text-red-400'></span>
                  </label>
                  <input
                    className={`block mt-1 border w-full px-2 py-1 rounded outline-none  ${
                      touched.budget && !errors.budget && 'border-green-500'
                    }`}
                    type='text'
                    name='budget'
                    value={values.budget}
                    onBlur={handleBlur}
                    error={errors.budget}
                    onChange={handleChange}
                    placeholder='$***.00'
                  />
                  <p className='text-red-400 text-xs'>{errors.budget}</p>
                </div>
                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    month <span className='text-red-400'>*</span>
                  </label>
                  <div className='relative'>
                    <select
                      name='month'
                      value={values.month}
                      onBlur={handleBlur}
                      error={errors.month}
                      onChange={handleChange}
                      className={`block appearance-none mt-1 w-full py-1 px-2 rounded bg-white border ${
                        touched.month && !errors.month && 'border-green-600'
                      }`}
                    >
                      <option>JUN</option>
                      <option>OCT</option>
                    </select>
                    <p className='text-red-400 text-xs'>{errors.month}</p>
                  </div>
                </div>
                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    type <span className='text-red-400'>*</span>
                  </label>
                  <div className='relative'>
                    <select
                      name='type'
                      value={values.type}
                      onBlur={handleBlur}
                      error={errors.type}
                      onChange={handleChange}
                      className={`block appearance-none mt-1 w-full py-1 px-2 rounded bg-white border ${
                        touched.type && !errors.type && 'border-green-600'
                      }`}
                    >
                      <option value={0}>Flexible Expense</option>
                      <option value={1}>Fixed Expense</option>
                    </select>
                    <p className='text-red-400 text-xs'>{errors.type}</p>
                  </div>
                </div>
                <div className='form-group'>
                  <label className='form-label font-bold capitalize'>
                    date <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className={`block mt-1 border w-full px-2 py-1 rounded outline-none  ${
                      touched.date && !errors.date && 'border-green-500'
                    }`}
                    type='date'
                    name='date'
                    value={values.date}
                    onBlur={handleBlur}
                    error={errors.date}
                    onChange={handleChange}
                    placeholder='**/**/2***'
                  />
                  <p className='text-red-400 text-xs'>{errors.date}</p>
                </div>
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='hover:shadow-form  w-full mt-4 rounded  bg-[#6A64F1] py-2 px-6 text-center text-base font-semibold text-white outline-none'
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>

        {/* <Button key='back' onClick={handleCancel}>
          Cancel
        </Button>

        <Button key='submit' type='primary' onClick={handleOk}>
          Submit
        </Button> */}
      </Modal>
    </>
  );
};

export default AddExpenses;
