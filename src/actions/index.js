import axios from "axios";

export const plus = (num) => {
  return { type: "PLUS", payload: { num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { num } };
};

export const asyncMinus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num } });
    }, 1000);
  };
};

export const changeTitle = (title) => {
  return { type: "CHANGE_TITLE", payload: { title } };
};

export const wait = () => {
  return { type: "WAIT" };
};

export const getJson = () => {
  return (dispatch) => {
    dispatch(wait());
    const url = "https://jsonplaceholder.typicode.com/users/1";

    axios.get(url).then((res) => {
      console.log(res.data.name);
      dispatch(changeTitle(res.data.name));
    });
  };
};
