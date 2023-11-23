// actions.js

// Acción para incrementar
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  // Acción para decrementar
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };
  
  // Acción para incrementar por un valor específico
  export const incrementBy = (value) => {
    return {
      type: 'INCREMENT_BY',
      payload: value
    };
  };
  