const inisialState = {
  users: [],
};

const reducer5 = (state = inisialState, action) => {
  switch (action.type) {
    case '5_ADD_USER':
      console.log('Add berhasil');
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default reducer5;
