import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Basket } from "../screens/Basket";
import { Menu } from "../screens/Menu";
import { Map } from "../screens/Map";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Order = () => {
  return <Map />;
};

const TAB_ICON = {
  Home: "home",
  Cesta: "shopping-basket",
  Mercado: "search",
  Perfil: "person",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#DC7700",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const Main = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Menu} />
      <Tab.Screen name="Cesta" component={Basket} />
      <Tab.Screen name="Mercado" component={Order} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
