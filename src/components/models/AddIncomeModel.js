import * as yup from 'yup';

const initialValues = {
  name: '',
  ammount: '',
  type: '',
  date: '',
};

const validationSchama = yup.object().shape({
  name: yup.string().required('Name is requierd'),
  ammount: yup.string().required('Ammount is requierd'),
  type: yup.string().required('Type is requierd'),
  date: yup.string().required('Date is requierd'),
});

export { initialValues, validationSchama };
