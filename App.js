import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouriteContextProvider from "./store/context/Favourite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#354578" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#231345" },
        drawerActiveBackgroundColor: "#354578",
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
        drawerContentStyle: { backgroundColor: "#231345" },
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategory"
            screenOptions={{
              headerStyle: { backgroundColor: "#354578" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#231345" },
            }}
          >
            <Stack.Screen
              name="MealsCategory"
              component={DrawerNavigation}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="Meal" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
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
