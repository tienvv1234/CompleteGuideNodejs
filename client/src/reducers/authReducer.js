import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  console.log('action', action)
  switch (action.type) {
    case FETCH_USER:
      console.log(10);
      return action.payload || false;
    default:
      return state;
  }
}
