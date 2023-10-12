//challenge 8
import React from 'react'

export const Son = ({ numero, incremet}) => {
    

    return (
      <button
        className="btn btn-primary mr-3"
        onClick={() =>  incremet(numero)}
      >
        {numero}
      </button>
    );
};