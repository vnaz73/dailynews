const initialState = {};

const  postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'first':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default postReducer
