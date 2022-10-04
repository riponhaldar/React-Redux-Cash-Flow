import * as yup from 'yup';

const initialValues = {
  name: '',
  amount: '',
  type: 'Fixed Income',
  date: '',
};

const validationSchama = yup.object().shape({
  name: yup.string().required('Name is required'),
  amount: yup
    .string()
    .matches(/^\d+(\.\d+)*$/, 'Should have digits only')
    .required('Amount is required'),
  type: yup.string().required('Type is required'),
  date: yup.string().required('Date is required'),
});

export { initialValues, validationSchama };
