import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import StudantCard from "../screens/StudantCard";
import colors from "../theme/colors";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitle: "",
        }}
      />
      <Stack.Screen name="Cadastro" component={RegisterScreen} />
      <Stack.Screen
        name="Painel"
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitle: "IESB",
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Carteirinha"
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitle: "IESB",
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
        component={StudantCard}
      />
    </Stack.Navigator>
  );
}
