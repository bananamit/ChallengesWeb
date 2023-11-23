// reducer.js

const initialState = {
    documents: [],
    error: null
  };
  
  const firestoreReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DOCUMENT':
        return {
          ...state,
          documents: state.documents.map((doc) =>
            doc.id === action.payload.docId ? { ...doc, ...action.payload.newData } : doc
          )
        };
      case 'DELETE_DOCUMENT':
        return {
          ...state,
          documents: state.documents.filter((doc) => doc.id !== action.payload)
        };
      case 'UPDATE_ERROR':
      case 'DELETE_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default firestoreReducer;
  