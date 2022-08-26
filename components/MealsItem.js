import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Mealdetails from "./Mealdetails";

const MealsItem = ({ id, title, imgUrl, duration, complexity, affordability }) => {

  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Meal", {
        MealId: id
    });
  }

  return (
    <View style={styles.MealsItem}>
      <Pressable android_ripple={{color:'#ccc'}} onPress={handlePress}>
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration}m</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View> */}
        <Mealdetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  MealsItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  // details: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 8,
  //   justifyContent: "center",
  // },
  // detailsItem: {
  //   fontSize: 12,
  //   marginHorizontal: 4,
  // },
});
