import React from 'react';
import Expenses from '../../components/Expenses';
import Income from '../../components/Income';
import TotalBalance from '../../components/TotalBalance';

const CashFlow = () => {
  return (
    <div className='md:max-w-screen-lg  sm:px-2 px-4 m-auto'>
      {/* total balance ********** */}
      <TotalBalance />
      {/* Income ********** */}
      <Income />
      {/* Expenses ********** */}
      <Expenses />
    </div>
  );
};

export default CashFlow;
