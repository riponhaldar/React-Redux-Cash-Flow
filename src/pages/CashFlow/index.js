import React from 'react';
import Expenses from '../../components/Expenses';
import Income from '../../components/Expenses/Income';
import TotalBalance from '../../components/TotalBalance';

const CashFlow = () => {
  return (
    <div className='container px-2 m-auto'>
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
