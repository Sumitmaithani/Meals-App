import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentMeal) => [...currentMeal, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentMeal) =>
      currentMeal.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
}

export default FavouriteContextProvider;
