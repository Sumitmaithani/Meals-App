import React from 'react'
import { FlatList, Pressable, StyleSheet,ScrollView, Text, View } from "react-native";
import MealsItem from "./MealsItem";

const MealList = ({items}) => {

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealsItemProps = {
          id: item.id,
          title: item.title,
          imgUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
        return <MealsItem {...mealsItemProps} />;
      }

  return (
    <ScrollView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
    </ScrollView>
  )
}

export default MealList

const styles = StyleSheet.create({})