import { LOCATION } from "../actions/actionTypes";

const INITIAL_STATE = {
  data: {
    nome: '',
    clima: '',
  }
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATION:
      return {
        ...state,
        data:action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;
