import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function handlePress() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }
      
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={handlePress}
          />
        );
      }
      

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
