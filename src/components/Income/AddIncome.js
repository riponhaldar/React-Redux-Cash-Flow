import React, { useState } from 'react';
import { Modal } from 'antd';
import { initialValues, validationSchama } from '../models/AddIncomeModel';
import { Formik } from 'formik';

const AddIncome = ({ open, setOpen }) => {
  const [newValue, setNewValue] = useState([]);
  // const handleOk = () => {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 2000);
  // };

  const handleCancel = () => {
    setOpen(false);
  };
  const inComeSubmit = (values) => {
    console.log('values', values);
    setNewValue([...newValue, values]);
  };
  console.log('newValue', newValue);
  return (
    <>
      <Modal
        open={open}
        title='Income'
        footer={null}
        onCancel={() => setOpen(!open)}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchama}
          onSubmit={inComeSubmit}
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
                <div className=''>
                  <label className='form-lable font-bold capitalize'>
                    Name <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className='block mt-1 border w-full px-2 py-1 rounded '
                    type='text'
                    name='name'
                    value={values.name}
                    onBlur={handleBlur}
                    error={errors.name}
                    onChange={handleChange}
                    placeholder='salary**'
                  />
                  <p className='text-red-400 text-xs'>{errors.name}</p>
                </div>
                <div className=''>
                  <label className='form-lable font-bold capitalize'>
                    ammount <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className='block mt-1 border w-full px-2 py-1 rounded '
                    type='text'
                    name='ammount'
                    value={values.ammount}
                    onBlur={handleBlur}
                    error={errors.ammount}
                    onChange={handleChange}
                    placeholder='$***.00'
                  />
                  <p className='text-red-400 text-xs'>{errors.ammount}</p>
                </div>
                <div className=''>
                  <label className='form-lable font-bold capitalize'>
                    type <span className='text-red-400'>*</span>
                  </label>
                  <div class='relative'>
                    <select
                      name='type'
                      value={values.type}
                      onBlur={handleBlur}
                      error={errors.type}
                      onChange={handleChange}
                      className='block appearance-none mt-1 w-full py-1 rounded bg-white border'
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <p className='text-red-400 text-xs'>{errors.type}</p>
                  </div>
                </div>
                <div className=''>
                  <label className='form-lable font-bold capitalize'>
                    date <span className='text-red-400'>*</span>
                  </label>
                  <input
                    className='block mt-1 border w-full px-2 py-1 rounded '
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
                {/* <button
                  onClick={handleCancel}
                  className='hover:shadow-form  mt-4 rounded bg-gray-400 py-2 px-6 text-center text-base font-semibold text-white outline-none mr-3'
                >
                  Cancel
                </button> */}
                <button
                  type='submit'
                  className='hover:shadow-form  w-full mt-4 rounded bg-[#6A64F1] py-2 px-6 text-center text-base font-semibold text-white outline-none'
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

export default AddIncome;