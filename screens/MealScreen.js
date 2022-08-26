import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import Mealdetails from "../components/Mealdetails";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/Favourite-context";

const MealScreen = ({ route, navigation }) => {
  const mealID = route.params.MealId;
  const FavouriteMealCtx = useContext(FavouriteContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const mealIsFavourite = FavouriteMealCtx.ids.includes(mealID);

  function headerButtonPressHandler() {
    if (mealIsFavourite) {
      FavouriteMealCtx.removeFavourite(mealID);
    } else {
      FavouriteMealCtx.addFavourite(mealID);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    }),
      [navigation, headerButtonPressHandler];
  });

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{selectedMeal.title}</Text>
      <View>
        <Mealdetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.center}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredants</Text>
        </View>
        {selectedMeal.ingredients.map((ingredient) => (
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{ingredient}</Text>
          </View>
        ))}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailText: {
    color: "white",
  },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginBottom: 8,
  },
  center: {
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 6,
    textAlign: "center",
  },
  descriptionContainer: {
    backgroundColor: "#554324",
    margin: 3,
    textAlign: "center",
    width: "80%",
    padding: 4,
  },
  description: {
    color: "white",
    fontSize: 13,
    marginLeft: 6,
  },
});
