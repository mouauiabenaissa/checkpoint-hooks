const filmInit = [];
const handleFavoris = (state = filmInit, action) => {
  const film = action.payload;
  switch (action.type) {
    case "addfilm":
      return [
        ...state,
        {
          ...film,
        },
      ];
    default:
      return state;
  }
};

export default handleFavoris;
