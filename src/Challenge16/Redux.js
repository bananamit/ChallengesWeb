// actions.js

export const updateDocument = (docId, newData) => (dispatch) => {
    firestore.collection('yourCollection').doc(docId).update(newData)
      .then(() => {
        dispatch({ type: 'UPDATE_DOCUMENT', payload: { docId, newData } });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ERROR', payload: error.message });
      });
  };
  
  export const deleteDocument = (docId) => (dispatch) => {
    firestore.collection('yourCollection').doc(docId).delete()
      .then(() => {
        dispatch({ type: 'DELETE_DOCUMENT', payload: docId });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_ERROR', payload: error.message });
      });
  };
  