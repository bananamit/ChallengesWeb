// SomeComponent.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { updateDocument, deleteDocument } from './actions';

const SomeComponent = ({ docId, currentData }) => {
  const dispatch = useDispatch();

  const handleUpdate = (newData) => {
    dispatch(updateDocument(docId, newData));
  };

  const handleDelete = () => {
    dispatch(deleteDocument(docId));
  };

  return (
    <>
      {/* Aquí irían tus inputs y botones para actualizar y eliminar */}
      <button onClick={() => handleUpdate({ field: 'newValue' })}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default SomeComponent;
