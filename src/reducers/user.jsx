const createInitialState = () => {
  return {
    userName: "默认名字",
    userId: "",
    role: "",
    group: "",
  };
};
const user = (state = createInitialState(), action) => {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default user;
