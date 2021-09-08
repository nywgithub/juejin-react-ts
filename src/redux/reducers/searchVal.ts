const searchVal = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_VALUE":
      return {
          value: action.value
        }
    default:
      return state;
  }
}
export default searchVal