// Challenge 6
import React from 'react';
import { useFetch } from './UseFetch';

export const FetchComponent = ({ url }) => {
    const { data, isLoading, hasError } = useFetch(url);
  
    if (isLoading) {
      return <div>Carganding...</div>;
    }
  
    if (hasError) {
      return <div>todo mal, hay error: {hasError}</div>;
    }
  
    return (
      <div>
        <h1>Fetch: </h1>
        {/* Renderizar los datos aquí. Esto es solo un ejemplo y puede variar según la estructura de tus datos. */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
