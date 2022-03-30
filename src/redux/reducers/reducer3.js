const inisialState = {
  users: [],
};

const reducer3 = (state = inisialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      console.log('Set Berhasil');
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_USER':
      console.log('Add berhasil');
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'DELETE_USER':
      console.log('Delete berhasil');
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'UPDATE_USER':
      console.log('Update berhasil');
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer3;
