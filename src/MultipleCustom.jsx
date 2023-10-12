// Challenge 7 
import React, { useState, useEffect } from 'react';
import useCounter from './UseCounter';
import { useFetch } from './UseFetch';

export const MultipleCustom = () => {
    const { count: Counter, increment } = useCounter(1);
    const apiUrl = `https://breakingbadapi.com/api/quotes/${Counter}`;
    const { data: quote, loading, error } = useFetch(apiUrl);
  
    if (loading) {
      return <div className='alert alert-info text-center'>Carganding...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>; 
    }
  
    return (
      <>
        <h1>MultipleCustomHooks</h1>
        <hr />
        {quote && quote.length > 0 && (
          <blockquote className='blockquote text-end'>
            <p className='mb-1'>{quote[0].quote}</p>
            <footer className='blockquote-footer'>{quote[0].author}</footer>
          </blockquote>
        )}
        <button className='btn btn-primary' onClick={increment}>Siguiente Quote</button>
      </>
    );
  };
