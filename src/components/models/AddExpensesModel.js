import * as yup from 'yup';

const initialValues = {
  name: '',
  budget: '',
  month: 'Jan',
  amount: '',
  type: '0',
  date: '',
};

const validationSchama = yup.object().shape({
  name: yup.string().required('Name is required'),
  amount: yup.string().matches(/^\d+$/, 'Should have digits only').required('Amount is required'),
  budget: yup.string().matches(/^\d+$/, 'Should have digits only').optional('budget is required'),
  month: yup.string().required('Month is required'),
  type: yup.string().required('Type is required'),
  date: yup.string().required('Date is required'),
});

export { initialValues, validationSchama };
