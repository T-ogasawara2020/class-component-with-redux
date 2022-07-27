const number = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      console.log(action);
      return state + action.payload.num;
    case "PLUS_ONE":
      return state + 1;

    case "MINUS":
      return state - action.payload.num;
    default:
      return state;
  }
};

export default number;
