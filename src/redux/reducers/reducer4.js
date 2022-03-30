const inisialState = {
  users: [],
};

const reducer4 = (state = inisialState, action) => {
  switch (action.type) {
    case '4_SET_USERS':
      console.log('Set Berhasil');
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer4;
