const activeCityReducer = (state, action) => {
	if (state === undefined) {
		return null;
	}

  switch (action.type) {
    case "ACTIVE_CITY":
     return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;