import React from 'react'; 
import './App.css';
import { useCurrencyInfo } from './hooks';

function App() {
  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency Converter</h1>
      <useCurrencyInfo pro={'usd'}></useCurrencyInfo>
    </>
  );
}

export default App;
