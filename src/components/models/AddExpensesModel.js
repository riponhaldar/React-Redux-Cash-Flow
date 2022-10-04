import * as yup from 'yup';

const initialValues = {
  name: '',
  budget: '',
  Month: 'Jan',
  ammount: '',
  type: 'Flexible Expense',
  date: '',
};

const validationSchama = yup.object().shape({
  name: yup.string().required('Name is requierd'),
  ammount: yup.string().required('Ammount is requierd'),
  budget: yup.string().optional('budget is requierd'),
  Month: yup.string().required('Months is requierd'),
  type: yup.string().required('Type is requierd'),
  date: yup.string().required('Date is requierd'),
});

export { initialValues, validationSchama };
