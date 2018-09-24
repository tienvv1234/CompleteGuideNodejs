import axios from "axios";
import { FETCH_USER } from "./types";
console.log(7)
export const fetchUser = () => {
  console.log("fetchUser")
  return function(dispatch) {
    console.log("dispatch")
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
