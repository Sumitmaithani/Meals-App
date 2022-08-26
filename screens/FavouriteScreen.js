import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealList";
import { FavouriteContext } from "../store/context/Favourite-context";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = ({ route, navigation }) => {
  const FavouriteMealCtx = useContext(FavouriteContext);

  const favouriteMeal = MEALS.filter((meal) =>
    FavouriteMealCtx.ids.includes(meal.id)
  );

  if(favouriteMeal.length===0){
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    )
  }

  return (
    <>
      <MealList items={favouriteMeal} />
    </>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  root:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
